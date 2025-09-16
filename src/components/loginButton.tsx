"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

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
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success("Login realizado com sucesso!");
          console.log("Login successful:", data);
        } else {
          toast.error(data.message || "Falha no login");
          console.error("Login failed:", data.message);
        }
      } catch (error) {
        toast.error("Ocorreu um erro no login");
        console.error("An error occurred during login:", error);
      }
    } else {
      // REGISTER
      if (password !== confirmPassword) {
        toast.error("As senhas não coincidem");
        return;
      }
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success("Cadastro realizado com sucesso!");
          console.log("Registration successful:", data);
        } else {
          toast.error(data.message || "Falha no cadastro");
          console.error("Registration failed:", data.message);
        }
      } catch (error) {
        toast.error("Ocorreu um erro no cadastro");
        console.error("An error occurred during registration:", error);
      }
    }

    onClose();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 right-0 z-50 w-80"
      >
        <Card className="shadow-xl rounded-2xl h-[70vh] bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400 text-center">
              {isLogin ? "Login" : "Cadastro"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!isLogin && (
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
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
              {!isLogin && (
                <Input
                  type="password"
                  placeholder="Confirmar senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
              <Button type="submit" className="w-full cursor-pointer">
                {isLogin ? "Entrar" : "Cadastrar"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                {isLogin ? "Não tem conta?" : "Já tem conta?"}{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Cadastre-se" : "Login"}
                </button>
              </p>
              <Button
                variant="ghost"
                className="w-full cursor-pointer"
                onClick={onClose}
              >
                Fechar
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
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
