"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";

interface DraggableButtonProps {
  onClick?: () => void;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ onClick }) => {
  const nodeRef = useRef<HTMLButtonElement>(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <button
        ref={nodeRef}
        onClick={onClick}
        className="
          w-10 h-10               /* largura e altura iguais */
          rounded-full            /* deixa totalmente circular */
          bg-gradient-to-r from-red-500 to-blue-500            /* cor de fundo */
          text-white text-2xl     /* texto grande e branco */
          flex items-center justify-center  /* centraliza o '?' */
          shadow-lg cursor-move
        "
      >
        ?
      </button>
    </Draggable>
  );
};

export default DraggableButton;
