"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../InputField";
import Message from "../Message";

export default function CadastroForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");
        setSucesso("");

        if (senha !== confirmar) {
            setErro("As senhas não coincidem.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3001/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password: senha }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                if (data?.error?.includes("exists")) setErro("Este e-mail já está cadastrado.");
                else if (data?.error?.includes("password")) setErro("A senha é inválida ou muito curta.");
                else if (data?.error) setErro(data.error);
                else setErro("Erro ao cadastrar. Tente novamente.");
                return;
            }

            setSucesso("Cadastro realizado com sucesso!");
            setTimeout(() => router.push("/login"), 1500);
        } catch {
            setErro("Erro ao conectar com o servidor.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <h1 className="text-center text-xl font-semibold text-gray-800">Crie sua conta</h1>

            <Message text={erro} type="error" />
            <Message text={sucesso} type="success" />

            <InputField label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
            <InputField label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Mínimo 6 caracteres" />
            <InputField label="Confirmar senha" type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} placeholder="Repita a senha" />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Cadastrar
            </button>

            <p className="text-xs text-center text-gray-500">Ao cadastrar você aceita nossos termos.</p>
        </form>
    );
}
