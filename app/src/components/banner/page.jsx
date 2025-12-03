"use client";

import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section className="w-full h-screen relative overflow-hidden bg-gradient-to-l from-blue-400 via-blue-500 to-blue-700">

            <motion.img
                src="/fadazul.png"
                alt="banner"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            />

            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <p
                    className="text-white text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-[0_0_18px_rgba(255,255,255,0.8)]"
                >
                    Bem vindo ao
                </p>

                <motion.span
                    className="mt-3 text-white text-6xl md:text-8xl font-black drop-shadow-[0_0_35px_rgba(255,255,255,1)]"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                    Neko Verse
                </motion.span>
            </motion.div>


        </section>
    );
}
