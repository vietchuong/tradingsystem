"use client";

import { motion } from "framer-motion";

const TradeCard = ({
    ticker,
    returnMultiple,
    note,
}: {
    ticker: string;
    returnMultiple: string;
    note: string;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-navy border border-gray-800 p-6 rounded-xl hover:border-emerald/50 transition-all"
    >
        <div className="flex justify-between items-center mb-4">
            <h4 className="text-2xl font-bold text-white">{ticker}</h4>
            <span className="bg-emerald/10 text-emerald px-3 py-1 rounded-full text-sm font-bold border border-emerald/20">
                +{returnMultiple}R
            </span>
        </div>
        <div className="w-full h-32 bg-navy-light rounded-lg mb-4 flex items-center justify-center border border-gray-800 relative overflow-hidden">
            {/* Abstract Chart Representation */}
            <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                    d="M0,100 Q30,90 50,60 T100,20"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                />
                <circle cx="20" cy="95" r="3" fill="#fbbf24" /> {/* Buy */}
                <circle cx="100" cy="20" r="3" fill="#ef4444" /> {/* Sell */}
            </svg>
        </div>
        <p className="text-sm text-gray-400">{note}</p>
    </motion.div>
);

export default function SocialProof() {
    return (
        <section className="py-24 bg-navy relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Kết Quả Nói Lên Tất Cả
                    </h2>
                    <p className="text-gray-400">
                        Không lời hứa suông. Chỉ có kết quả được đo lường bằng R-Multiple.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    <TradeCard
                        ticker="TSLA"
                        returnMultiple="12.5"
                        note="Breakout VCP nền giá 3 tuần. Giữ lệnh 14 ngày."
                    />
                    <TradeCard
                        ticker="NVDA"
                        returnMultiple="8.2"
                        note="Pocket Pivot tại MA50. Trend Following kinh điển."
                    />
                    <TradeCard
                        ticker="AMD"
                        returnMultiple="5.4"
                        note="Mô hình 2 đáy (Double Bottom). Thoát lệnh khi gãy trend."
                    />
                    <TradeCard
                        ticker="COIN"
                        returnMultiple="21.0"
                        note="Bắt đáy thành công với mô hình Wyckoff Spring."
                    />
                </div>
            </div>
        </section>
    );
}
