"use client";

export default function Message({ text, type }) {
    if (!text) return null;
    const color = type === "error" ? "text-red-500" : "text-green-500";
    return <p className={`text-center font-medium ${color}`}>{text}</p>;
}
