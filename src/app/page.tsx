"use client";

import DraggableButton from "@/components/infoButton";
import { PixelatedCanvasDemo } from "@/components/hero";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState } from "react";
import LoginPopupWrapper from "@/components/loginButton";
import { Toaster } from "sonner";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  const loadingStates = [
    { text: "Chega de processos longos e silenciosos!" },
    { text: "Em busca do seu primeiro emprego ou estágio?" },
    {
      text: "Faça parte de uma comunidade que compartilha, apoia e cresce junto.",
    },
    {
      text: "Chegou a sua vez!",
    },
    { text: "Seja bem-vind@ á plataforma noqi! " },
    { text: "Onde oportunidades acontecem." },
  ];

  const handleClick = () => {
    setShowLoader(true); // Abre o loader ao clicar
  };

  return (
    <div className="relative h-screen">
      <Toaster position="top-right" richColors  />

      <PixelatedCanvasDemo />

      {/* Botão draggable */}
      <div style={{ position: "absolute", top: "80%", right: "5%" }}>
        <DraggableButton onClick={handleClick} />
      </div>

      {/* Login/Registro */}
      <div style={{ position: "absolute", top: "80%", right: "2%" }}>
        <LoginPopupWrapper /> {/* aqui você coloca o wrapper */}
      </div>

      {/* Loader */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={showLoader}
        loop={false}
        onClose={() => setShowLoader(false)}
      />
    </div>
  );
}
