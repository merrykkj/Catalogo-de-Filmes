"use client";

export default function InputField({ label, type, value, onChange, placeholder }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-semibold text-blue-600 mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:shadow-lg transition duration-300 bg-white/80 backdrop-blur-sm placeholder-blue-400"
            />
        </div>
    );
}
