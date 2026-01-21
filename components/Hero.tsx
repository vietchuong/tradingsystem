"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-block px-4 py-1 mb-4 border border-gold/30 rounded-full bg-gold/5 text-gold text-sm font-semibold tracking-wide">
                        HỆ THỐNG GIAO DỊCH 3 TRỤ CỘT
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Giao Dịch Như Một <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-500">
                            Nhà Vô Địch
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-xl">
                        Không chỉ là điểm vào lệnh. Đây là sự kết hợp giữa kỹ thuật{" "}
                        <span className="text-white font-semibold">VCP</span>, tư duy xác
                        suất và quản lý vị thế chuẩn{" "}
                        <span className="text-white font-semibold">R-Multiple</span>.
                    </p>
                    <button className="px-8 py-4 bg-emerald hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg shadow-emerald/20 transition-all transform hover:scale-105">
                        Tham Gia Huấn Luyện
                    </button>
                </motion.div>

                {/* Visual: VCP Pattern Simulation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] w-full bg-navy-light rounded-xl border border-gray-800 p-6 shadow-2xl"
                >
                    <div className="absolute top-4 left-4 text-xs text-gray-500 font-mono">
                        VCP PATTERN DETECTED
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                        {/* Grid */}
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="rgba(255,255,255,0.05)"
                                strokeWidth="1"
                            />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Price Action Line (Simulated VCP) */}
                        <motion.path
                            d="M 20 250 C 50 100, 80 50, 100 80 S 140 200, 160 180 S 200 120, 220 140 S 260 160, 280 150 S 320 130, 350 135 L 350 135"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Pivot Point */}
                        <motion.circle
                            cx="350"
                            cy="135"
                            r="4"
                            fill="#fbbf24"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2, duration: 0.4 }}
                        />
                        <motion.text
                            x="360" y="130"
                            fill="#fbbf24"
                            fontSize="12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                        >
                            Pivot Pocket
                        </motion.text>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
