"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-transparent h-24 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">

                <div className="h-80 w-80 flex items-center justify-center overflow-hidden">
                    <img
                        src="/nekologo.png"
                        alt="Logo"
                        className="h-full w-full object-contain"
                    />
                </div>

                <nav className="flex items-center gap-6 text-white text-lg">
                    <Link href="/" className="hover:opacity-80 transition">Home</Link>
                    <Link href="/sobre" className="hover:opacity-80 transition">Sobre</Link>
                    <Link href="/contato" className="hover:opacity-80 transition">Contato</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-white text-lg hover:opacity-80 transition"
                    >
                        Login
                    </Link>

                    <Link
                        href="/cadastro"
                        className="px-4 py-2 bg-white text-blue-500 hover:bg-white/50 rounded-lg font-medium hover:bg-opacity-80 transition"
                    >
                        Cadastro
                    </Link>
                </div>

            </div>
        </header>
    );
}
