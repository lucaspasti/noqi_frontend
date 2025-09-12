"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-12 h-12
        rounded-full
        bg-gradient-to-r from-blue-500 to-red-500
        text-white text-2xl
        flex items-center justify-center
        shadow-lg cursor-pointer
      "
    >
      <LogIn />
    </button>
  );
};

const LoginPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    onClose(); // fecha popup
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-full mb-2 right-0 z-50 w-80" // <- aqui é a mágica
    >
      <Card className="shadow-xl rounded-2xl h-[70vh] bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-400 text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <p className="text-center text-sm text-gray-600">
              Não tem conta?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Cadastre-se
              </a>
            </p>
            <Button variant="ghost" className="w-full" onClick={onClose}>
              Fechar
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function LoginPopupWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <LoginButton onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && <LoginPopup onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
