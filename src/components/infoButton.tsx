"use client";

import React, { useRef } from "react";

interface DraggableButtonProps {
  onClick?: () => void;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ onClick }) => {
  const nodeRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={nodeRef}
      onClick={onClick}
      className="
          w-12 h-12               /* largura e altura iguais */
          rounded-full            /* deixa totalmente circular */
          bg-gradient-to-r from-red-500 to-blue-500            /* cor de fundo */
          text-white text-2xl     /* texto grande e branco */
          flex items-center justify-center  /* centraliza o '?' */
          shadow-lg cursor-move
          cursor-pointer
        "
    >
      ?
    </button>
  );
};

export default DraggableButton;
