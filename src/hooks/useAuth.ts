"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthUser = {
  id: number;
  name: string;
  email: string;
};

interface UseAuthOptions {
  redirectTo?: string;
  redirectIfFound?: boolean;
}

export function useAuth({
  redirectTo = "/",
  redirectIfFound = false,
}: UseAuthOptions = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token do localStorage:", token);

    if (!token) {
      console.log("Nenhum token encontrado, redirecionando...");
      if (!redirectIfFound) router.push(redirectTo);
      setLoading(false);
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log("Status da resposta do /me:", res.status); // 🔹 debug
        if (!res.ok) throw new Error("Token inválido");
        return res.json();
      })
      .then((data) => {
        console.log("Dados recebidos do /me:", data); // 🔹 debug
        setUser(data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.error("Erro ao validar token:", err); // 🔹 debug
        localStorage.removeItem("token");
        router.push("/");
      })
      .finally(() => setLoading(false));
  }, [redirectTo, redirectIfFound, router]);

  return { isAuthenticated, loading, user };
}
