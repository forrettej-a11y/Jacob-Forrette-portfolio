"use client";

/**
 * React Three Fiber scene for the CAD viewer.
 * - Loads GLB/GLTF files, auto-centers and scales them to a consistent size.
 * - Falls back to a clearly-labelled demonstration part when no model exists.
 * - Environment lighting is generated locally (Lightformers), so nothing is fetched from a CDN.
 */
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Environment, Grid, Lightformer, OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

export type ViewPreset = "iso" | "front" | "top" | "right";

const DIST = 5.2;
export const PRESET_POSITIONS: Record<ViewPreset, [number, number, number]> = {
  iso: [DIST * 0.62, DIST * 0.48, DIST * 0.62],
  front: [0, 0.35, DIST],
  top: [0, DIST, 0.001],
  right: [DIST, 0.35, 0],
};

interface ControlsLike {
  target: THREE.Vector3;
  update: () => void;
}

function CameraRig({ preset, nonce }: { preset: ViewPreset; nonce: number }) {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as unknown as ControlsLike | null;
  const goal = useRef(new THREE.Vector3(...PRESET_POSITIONS.iso));
  const animating = useRef(false);

  useEffect(() => {
    goal.current.set(...PRESET_POSITIONS[preset]);
    animating.current = true;
  }, [preset, nonce]);

  useFrame(() => {
    if (!animating.current) return;
    camera.position.lerp(goal.current, 0.14);
    if (controls) {
      controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.14);
      controls.update();
    } else {
      camera.lookAt(0, 0, 0);
    }
    if (camera.position.distanceTo(goal.current) < 0.005) {
      camera.position.copy(goal.current);
      animating.current = false;
    }
  });
  return null;
}

function applyWireframe(root: THREE.Object3D, wireframe: boolean) {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((m) => {
      if (m && "wireframe" in m) (m as THREE.MeshStandardMaterial).wireframe = wireframe;
    });
  });
}

function GLBModel({ src, wireframe }: { src: string; wireframe: boolean }) {
  const { scene } = useGLTF(src);
  const object = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 2.6 / Math.max(size.x, size.y, size.z, 1e-6);
    clone.position.sub(center);
    const group = new THREE.Group();
    group.add(clone);
    group.scale.setScalar(scale);
    return group;
  }, [scene]);

  useEffect(() => applyWireframe(object, wireframe), [object, wireframe]);
  return <primitive object={object} />;
}

/** Generic machined flanged hub — demonstration geometry only, not a project part. */
function DemoPart({ wireframe }: { wireframe: boolean }) {
  const profile = useMemo(() => {
    // Half cross-section (radius, height) revolved about Y.
    const pts: [number, number][] = [
      [0.32, -0.9],
      [0.62, -0.9],
      [0.62, -0.62],
      [1.25, -0.62],
      [1.3, -0.57],
      [1.3, -0.38],
      [1.25, -0.33],
      [0.7, -0.33],
      [0.62, -0.25],
      [0.55, 0.62],
      [0.62, 0.7],
      [0.62, 0.9],
      [0.32, 0.9],
      [0.32, -0.9],
    ];
    return pts.map(([x, y]) => new THREE.Vector2(x, y));
  }, []);

  const holes = useMemo(
    () => Array.from({ length: 6 }, (_, i) => (i / 6) * Math.PI * 2),
    [],
  );

  return (
    <group rotation={[0, Math.PI / 6, 0]}>
      <mesh castShadow receiveShadow>
        <latheGeometry args={[profile, 96]} />
        <meshStandardMaterial color="#b9c2cc" metalness={0.85} roughness={0.32} wireframe={wireframe} side={THREE.DoubleSide} />
        {!wireframe && <Edges threshold={20} color="#4ea4ff" />}
      </mesh>
      {holes.map((a) => (
        <mesh key={a} position={[Math.cos(a) * 0.98, -0.475, Math.sin(a) * 0.98]}>
          <cylinderGeometry args={[0.085, 0.085, 0.3, 32]} />
          <meshStandardMaterial color="#0d0f12" metalness={0.2} roughness={0.8} wireframe={wireframe} />
        </mesh>
      ))}
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-steel-400">Loading model…</span>
    </Html>
  );
}

export default function ModelCanvas({
  src,
  preset,
  nonce,
  wireframe,
  autoRotate,
}: {
  src?: string;
  preset: ViewPreset;
  nonce: number;
  wireframe: boolean;
  autoRotate: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: PRESET_POSITIONS.iso, fov: 38, near: 0.05, far: 100 }}
      gl={{ antialias: true, preserveDrawingBuffer: false }}
      shadows
    >
      <color attach="background" args={["#0b0d10"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 3]} intensity={1.6} castShadow />
      <directionalLight position={[-5, 2, -4]} intensity={0.5} color="#82c0ff" />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={2} position={[0, 5, -6]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={1.2} position={[-6, 1, 0]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} color="#b9dcff" />
        <Lightformer form="rect" intensity={1} position={[6, 1, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>

      <Suspense fallback={<Loader />}>{src ? <GLBModel src={src} wireframe={wireframe} /> : <DemoPart wireframe={wireframe} />}</Suspense>

      <Grid
        position={[0, -1.35, 0]}
        args={[20, 20]}
        cellSize={0.25}
        cellThickness={0.6}
        cellColor="#1b3a5c"
        sectionSize={1}
        sectionThickness={1}
        sectionColor="#2a5d93"
        fadeDistance={14}
        fadeStrength={1.5}
        infiniteGrid
      />

      <OrbitControls makeDefault enableDamping dampingFactor={0.08} minDistance={1.6} maxDistance={14} autoRotate={autoRotate} autoRotateSpeed={0.8} />
      <CameraRig preset={preset} nonce={nonce} />
    </Canvas>
  );
}
