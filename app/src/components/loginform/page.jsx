"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../InputField";
import Message from "../Message";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setSucesso("");

        if (!email || !senha) {
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password: senha }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                if (data?.error?.includes("not found")) setErro("E-mail não encontrado.");
                else if (data?.error?.includes("incorrect")) setErro("Senha incorreta.");
                else if (data?.error?.includes("invalid")) setErro("Formato de e-mail inválido.");
                else if (data?.error) setErro(data.error);
                else setErro("Não foi possível fazer login. Tente novamente.");
                return;
            }

            setSucesso("Login realizado com sucesso!");
            setTimeout(() => router.push("/"), 1500);
        } catch {
            setErro("Erro ao conectar com o servidor. Tente novamente mais tarde.");
        }
    }

    return (
        <form
            className="relative w-full max-w-md bg-gradient-to-br from-blue-100/80 via-white/60 to-blue-200/80 p-8 rounded-3xl shadow-2xl space-y-6 border border-white/30 backdrop-blur-md animate-fadeIn"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center text-3xl font-extrabold text-blue-700 drop-shadow-md">Login</h1>

            <Message text={erro} type="error" />
            <Message text={sucesso} type="success" />

            <InputField label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
            <InputField label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />

            <button
                type="submit"
                className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md hover:scale-105 hover:shadow-xl transition transform duration-300 cursor-pointer"
            >
                Entrar
            </button>

            <p className="text-xs text-center text-blue-100 mt-2 italic">Esqueceu sua senha? (em breve)</p>
        </form>
    );
}
