import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({
  position,
  color,
  speed = 1,
  scale = 1,
  distort = 0.35,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
  distort?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = Math.sin(t * 0.2 * speed) * 0.4;
    ref.current.rotation.y = Math.cos(t * 0.15 * speed) * 0.4;
  });
  return (
    <Float speed={1.6 * speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 96, 96]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.3}
          roughness={0.05}
          metalness={0.25}
          transmission={0.85}
          thickness={1.2}
          ior={1.35}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

function MouseLight() {
  const ref = useRef<THREE.PointLight>(null);
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 14;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 8;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.x += (target.current.x - ref.current.position.x) * 0.06;
    ref.current.position.y += (target.current.y - ref.current.position.y) * 0.06;
  });
  return <pointLight ref={ref} position={[0, 0, 6]} intensity={60} color="#ffb8d1" distance={30} />;
}

function HoloRing({ position, color, rotationSpeed = 0.3 }: { position: [number, number, number]; color: string; rotationSpeed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * rotationSpeed;
    ref.current.rotation.y = t * rotationSpeed * 0.7;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.2, 0.04, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={1} roughness={0.2} />
    </mesh>
  );
}

function SceneContents() {
  const group = useRef<THREE.Group>(null);
  const parallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      parallax.current.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      parallax.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (parallax.current.x - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (parallax.current.y - group.current.rotation.x) * 0.04;
  });

  const spheres = useMemo(
    () =>
      [
        { p: [-4.2, 1.6, -2] as [number, number, number], c: "#f8b4c8", s: 1.05, d: 0.32, sp: 0.8 },
        { p: [4.6, -0.8, -3] as [number, number, number], c: "#c79bff", s: 1.4, d: 0.4, sp: 1.1 },
        { p: [0, 2.4, -4] as [number, number, number], c: "#8ab4ff", s: 0.85, d: 0.5, sp: 0.7 },
        { p: [-2.4, -2.2, -1.5] as [number, number, number], c: "#ffd1dc", s: 0.7, d: 0.28, sp: 1.3 },
        { p: [2.8, 2.2, -2.5] as [number, number, number], c: "#a78bfa", s: 0.55, d: 0.45, sp: 1.5 },
      ],
    [],
  );

  return (
    <group ref={group}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffe4f0" />
      <directionalLight position={[-6, -3, 2]} intensity={0.5} color="#b8c5ff" />
      <MouseLight />

      {spheres.map((s, i) => (
        <GlassSphere key={i} position={s.p} color={s.c} scale={s.s} distort={s.d} speed={s.sp} />
      ))}

      <HoloRing position={[-3.5, -1.5, -3]} color="#ff9ec7" rotationSpeed={0.25} />
      <HoloRing position={[3.5, 1.8, -4]} color="#a78bfa" rotationSpeed={-0.18} />

      <Sparkles count={120} scale={[14, 8, 6]} size={2.2} speed={0.35} color="#ffd1e6" opacity={0.7} />
      <Sparkles count={80} scale={[18, 10, 8]} size={1.3} speed={0.2} color="#c4b5fd" opacity={0.5} />

      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
    </group>
  );
}

export function Scene3D() {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    // Defer mounting until idle so it never blocks first paint.
    const t = setTimeout(() => setEnabled(true), 80);
    return () => clearTimeout(t);
  }, []);

  if (!enabled || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }: { gl: THREE.WebGLRenderer & { setClearColor: (c: number, a: number) => void } }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}

// satisfy unused type import
export type _Unused = ThreeEvent<MouseEvent>;
