"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type LEDGridProps = {
  triggerAt?: { x: number; y: number };
};

const LEDGrid = ({ triggerAt }: LEDGridProps) => {
  const ref = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const spacing = 0.15;
  const maxRows = 90;
  const maxCols = 160;

  const rows = Math.min(Math.floor(viewport.height / spacing), maxRows);
  const cols = Math.min(Math.floor(viewport.width / spacing), maxCols);
  const total = rows * cols;

  const lifetimes = useMemo(() => new Float32Array(total).fill(0), [total]);
  const opacities = useMemo(() => new Float32Array(total).fill(0), [total]);

  const positions = useMemo(() => {
    const list: THREE.Vector3[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        list.push(
          new THREE.Vector3(
            (x - cols / 2) * spacing,
            (y - rows / 2) * spacing,
            0
          )
        );
      }
    }
    return list;
  }, [rows, cols]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < total; i++) {
      // Check for trigger proximity
      if (triggerAt) {
        const mouseX = triggerAt.x * viewport.width / 2;
        const mouseY = triggerAt.y * viewport.height / 2;

        const dx = positions[i].x - mouseX;
        const dy = positions[i].y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.5) {
          lifetimes[i] = 1.0; // Trigger LED when near mouse
        }
      }

      // Activate randomly if not already active
      if (lifetimes[i] <= 0 && Math.random() < 0.00009) {
        lifetimes[i] = 1.0;
      }

      // LED active — handle fade
      if (lifetimes[i] > 0) {
        lifetimes[i] -= delta;
        const progress = 1 - lifetimes[i];
        const fade = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

        opacities[i] = fade;

        const baseHue = 0.53;
        const color = new THREE.Color().setHSL(
          baseHue,
          0.6,
          0.1 + 0.5 * fade
        );

        dummy.position.copy(positions[i]);
        dummy.scale.setScalar(0.9);
        dummy.updateMatrix();
        ref.current.setMatrixAt(i, dummy.matrix);
        ref.current.setColorAt(i, color);
      } else {
        // Inactive LED
        dummy.position.copy(positions[i]);
        dummy.scale.setScalar(0.8);
        dummy.updateMatrix();
        ref.current.setMatrixAt(i, dummy.matrix);
        ref.current.setColorAt(i, new THREE.Color(0x000000));
      }
    }

    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.instanceColor!.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, total]}>
      <planeGeometry args={[0.07, 0.07]} />
      <meshBasicMaterial
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

export default LEDGrid;
