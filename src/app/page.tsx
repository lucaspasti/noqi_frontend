"use client";

import DraggableButton from "@/components/draggableButton";
import { PixelatedCanvasDemo } from "@/components/hero";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  const loadingStates = [
    { text: "Carregando dados" },
    { text: "Processando informações" },
    { text: "Quase pronto" },
    { text: "Finalizando" },
  ];

  const handleClick = () => {
    setShowLoader(true); // Abre o loader ao clicar
  };

  return (
    <div className="relative h-screen">
      <PixelatedCanvasDemo />

      {/* Botão draggable */}
      <div style={{ position: "absolute", top: "80%", right: "5%" }}>
        <DraggableButton onClick={handleClick} />
      </div>

      {/* Loader */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={showLoader}
        loop={false}
        onClose={() => setShowLoader(false)} // fecha o loader automaticamente
      />
    </div>
  );
}
