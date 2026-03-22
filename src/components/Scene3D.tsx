"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron, Octahedron, Environment } from "@react-three/drei";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

/* ─── Floating Geometric Shapes ─── */
function FloatingIcosahedron({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    ref.current.rotation.y += speed * 0.002;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[scale, 1]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={0.3}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingTorus({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    ref.current.rotation.z = Math.cos(state.clock.elapsedTime * speed * 0.15) * 0.5;
  });
  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.5}>
      <Torus ref={ref} args={[scale, scale * 0.3, 16, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.12}
          wireframe
          distort={0.2}
          speed={1.5}
        />
      </Torus>
    </Float>
  );
}

function FloatingOctahedron({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.y += speed * 0.003;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.4;
  });
  return (
    <Float speed={speed * 0.6} rotationIntensity={0.5} floatIntensity={0.4}>
      <Octahedron ref={ref} args={[scale]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
          distort={0.25}
          speed={1.8}
        />
      </Octahedron>
    </Float>
  );
}

/* ─── Glowing Sphere (Center focal point) ─── */
function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08);
  });
  return (
    <Sphere ref={ref} args={[1.2, 64, 64]} position={[0, 0, -2]}>
      <MeshWobbleMaterial
        color="#9945ff"
        transparent
        opacity={0.06}
        factor={0.3}
        speed={1}
      />
    </Sphere>
  );
}

/* ─── Particle Field ─── */
function ParticleField({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#9945ff"),
      new THREE.Color("#00d1ff"),
      new THREE.Color("#14f195"),
      new THREE.Color("#f971ff"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.05;
  });

  const geomRef = useRef<THREE.BufferGeometry>(null!);

  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geomRef.current.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }
  }, [positions, colors]);

  return (
    <points ref={ref}>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Grid Floor ─── */
function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null!);
  useFrame((state) => {
    ref.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
  });
  return (
    <gridHelper
      ref={ref}
      args={[30, 30, "#9945ff", "#9945ff"]}
      position={[0, -4, -5]}
      rotation={[Math.PI * 0.05, 0, 0]}
      material-opacity={0.04}
      material-transparent={true}
    />
  );
}

/* ─── Mouse-reactive camera ─── */
function CameraRig() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.02;
    camera.position.y += (-mouseRef.current.y * 0.2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -2);
  });

  return null;
}

/* ─── Main Scene ─── */
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#9945ff" />
      <pointLight position={[-5, 3, 2]} intensity={0.3} color="#00d1ff" />
      <pointLight position={[0, -3, 3]} intensity={0.2} color="#14f195" />

      <CameraRig />
      <ParticleField count={250} />
      <GlowingSphere />
      <GridFloor />

      {/* Floating geometries */}
      <FloatingIcosahedron position={[-3.5, 1.5, -3]} color="#9945ff" speed={1.2} scale={0.7} />
      <FloatingIcosahedron position={[4, -1, -4]} color="#00d1ff" speed={0.8} scale={0.5} />
      <FloatingTorus position={[3, 2, -5]} color="#14f195" speed={1} scale={0.6} />
      <FloatingTorus position={[-4, -1.5, -6]} color="#f971ff" speed={0.7} scale={0.4} />
      <FloatingOctahedron position={[1.5, 3, -4]} color="#00d1ff" speed={0.9} scale={0.5} />
      <FloatingOctahedron position={[-2, -2.5, -5]} color="#9945ff" speed={1.1} scale={0.35} />
      <FloatingIcosahedron position={[5, 0.5, -7]} color="#f971ff" speed={0.6} scale={0.45} />
    </>
  );
}

export function Scene3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* ─── Section 3D Scene (lighter, for between sections) ─── */
function SectionSceneContent() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#9945ff" />
      <ParticleField count={80} />
      <FloatingIcosahedron position={[-2, 0, -3]} color="#9945ff" speed={0.5} scale={0.4} />
      <FloatingTorus position={[2, 0, -4]} color="#00d1ff" speed={0.4} scale={0.3} />
    </>
  );
}

export function SectionScene3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 opacity-40 ${className}`} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.2]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SectionSceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
