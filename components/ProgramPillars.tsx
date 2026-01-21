"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, ShieldCheck } from "lucide-react";

const Pillar = ({
    icon: Icon,
    title,
    items,
    delay,
}: {
    icon: any;
    title: string;
    items: string[];
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="bg-navy-light border border-gray-800 p-8 rounded-xl hover:border-gold/30 transition-all group"
    >
        <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-700 group-hover:border-gold">
            <Icon className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-400 text-sm">
                    <span className="text-emerald mr-2">✓</span>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function ProgramPillars() {
    return (
        <section className="py-24 bg-navy relative border-y border-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald font-semibold tracking-wider text-sm uppercase">
                        The Hybrid System
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">
                        Hệ Thống 3 Trụ Cột
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Pillar
                        icon={TrendingUp}
                        title="Kỹ Thuật (Technical)"
                        items={[
                            "Săn tìm 'Superperformance'",
                            "Mẫu hình VCP & Pivot Pocket",
                            "Lọc cổ phiếu dẫn dắt (Leader)",
                            "Đọc hành động giá & khối lượng",
                        ]}
                        delay={0}
                    />
                    <Pillar
                        icon={Brain}
                        title="Tư Duy (Mindset)"
                        items={[
                            "Xây dựng niềm tin không lay chuyển",
                            "Loại bỏ mâu thuẫn nội tâm",
                            "5 sự thật cốt lõi của thị trường",
                            "Thinking in Probabilities",
                        ]}
                        delay={0.2}
                    />
                    <Pillar
                        icon={ShieldCheck}
                        title="Quản Trị (Management)"
                        items={[
                            "Position Sizing (Quy mô vị thế)",
                            "Tính toán R-Multiple",
                            "Hệ thống Expectancy (Kỳ vọng dương)",
                            "Xác định Trader Type",
                        ]}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
