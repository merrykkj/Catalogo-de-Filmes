"use client";

import { motion } from "framer-motion";

export default function Sessao2() {
    return (
        <section className="w-full h-screen relative overflow-hidden bg-[linear-gradient(to_right,#FF7A00,#FFB347,#B57EDC,#6A0DAD)]">

            <motion.img
                src="/naruto3.png"
                alt="naruto"
                className="absolute left-0 top-0 h-full object-contain"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} 
            />

            <motion.img
                src="/naruto4.png"
                alt="hinata"
                className="absolute right-0 top-0 h-full object-contain"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            />

        </section>
    )
}
