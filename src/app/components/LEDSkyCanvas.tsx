"use client"; 

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LEDGrid from "./LEDGrid";

const LEDSkyCanvas = () => {
  const [triggerAt, setTriggerAt] = useState<{ x: number; y: number } | undefined>();

  const handleHover = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -((e.clientY / window.innerHeight) * 2 - 1);
    setTriggerAt({ x, y });

    setTimeout(() => setTriggerAt(undefined), 50);
  };

  return (
    <div
      className="w-full h-screen fixed inset-0 -z-10"
      onMouseMove={handleHover}
      onClick={handleHover}
    >
      <Canvas camera={{ position: [0, 0, 7.5], fov: 75 }}>
        <Suspense fallback={null}>
          <LEDGrid triggerAt={triggerAt} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LEDSkyCanvas;
