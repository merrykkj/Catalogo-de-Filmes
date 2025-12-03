"use client";

import Link from "next/link";

export default function PaginaPrincipal() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white p-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center drop-shadow-md">
                Catálogo de Animes
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                    <img src="/yourname.jpg" alt="Your Name" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Your Name</h2>
                        <p className="text-gray-700 mb-4">Um anime emocionante sobre amor e destino.</p>
                        <Link
                            href="/filme/1"
                            className="block text-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Ver Avaliações
                        </Link>
                    </div>
                </div>

                <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                    <img src="/demonslayer.jpg" alt="Demon Slayer" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Demon Slayer</h2>
                        <p className="text-gray-700 mb-4">A história de Tanjiro em sua jornada contra demônios.</p>
                        <Link
                            href="/filme/2"
                            className="block text-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Ver Avaliações
                        </Link>
                    </div>
                </div>

                <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                    <img src="/aot.jpg" alt="Attack on Titan" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Attack on Titan</h2>
                        <p className="text-gray-700 mb-4">Humanidade luta contra gigantes devoradores de pessoas.</p>
                        <Link
                            href="/filme/3"
                            className="block text-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Ver Avaliações
                        </Link>
                    </div>
                </div>

                <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                    <img src="/mha.jpg" alt="My Hero Academia" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">My Hero Academia</h2>
                        <p className="text-gray-700 mb-4">Heróis e vilões em batalhas épicas.</p>
                        <Link
                            href="/filme/4"
                            className="block text-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Ver Avaliações
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
