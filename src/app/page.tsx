"use client";

import { AnimatedLogo } from "@/components/animatedLogo";

export default function Home() {
  return (
    <div className="p-20 relative min-h-screen">
      {/* Cabeçalho com logo */}
      <div
        className="border-1 shadow-xl rounded-2xl flex flex-col items-center justify-center border-2 border-gray-500 animate-borderColor"
        style={{
          top: "5%",
          left: "5%",
          width: "300px",
          height: "300px",
          animation: `float 4s ease-in-out infinite alternate`,
        }}
      >
        <h1 className="text-3xl text-white font-bold text-center text-gray-800 mb-4 ">
          Bem-vindo ao
        </h1>
        <AnimatedLogo />
      </div>

      {/* Divs assimétricas com tamanhos variados */}
      <div
        className="border-1 shadow-xl rounded-2xl flex items-center justify-center text-xl text-center p-4"
        style={{
          top: "10%",
          left: "60%",
          width: "350px",
          height: "250px",
          animation: `float 4s ease-in-out infinite alternate`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <div
        className="border-1 shadow-xl rounded-2xl flex items-center justify-center text-xl text-center p-4"
        style={{
          top: "25%",
          left: "40%",
          width: "400px",
          height: "300px",
          animation: `float 3.5s ease-in-out infinite alternate`,
        }}
      >
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div
        className="border-1 shadow-xl rounded-2xl flex items-center justify-center text-xl text-center p-4"
        style={{
          top: "50%",
          left: "15%",
          width: "350px",
          height: "250px",
          animation: `float 4.5s ease-in-out infinite alternate`,
        }}
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </div>

      <div
        className="border-1 shadow-xl rounded-2xl flex items-center justify-center text-xl text-center p-4"
        style={{
          top: "65%",
          left: "55%",
          width: "400px",
          height: "320px",
          animation: `float 4s ease-in-out infinite alternate`,
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse.
      </div>

      <div
        className="border-1 shadow-xl rounded-2xl flex items-center justify-center text-xl text-center p-4"
        style={{
          top: "80%",
          left: "25%",
          width: "350px",
          height: "250px",
          animation: `float 3.8s ease-in-out infinite alternate`,
        }}
      >
        Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      </div>

      {/* Animação de flutuação */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
