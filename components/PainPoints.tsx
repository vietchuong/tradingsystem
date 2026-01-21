"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PainCard = ({ front, back }: { front: string; back: string }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-64 perspective-1000 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-navy-light border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald/50 transition-colors">
                    <div className="text-4xl mb-4">⚠️</div>
                    <h3 className="text-xl font-bold text-white">{front}</h3>
                    <p className="mt-4 text-sm text-gray-500">Chạm để xem giải pháp</p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden bg-emerald/10 border border-emerald/50 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-lg font-bold text-emerald">{back}</h3>
                </div>
            </motion.div>
        </div>
    );
};

export default function PainPoints() {
    return (
        <section className="py-24 bg-navy relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tại Sao Bạn Vẫn Thua Lỗ Dù Có Phương Pháp Tốt?
                    </h2>
                    <p className="text-gray-400">
                        Vấn đề không nằm ở thị trường. Vấn đề nằm ở cách bạn phản ứng với
                        nó.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <PainCard
                        front="Sợ hãi khi vào lệnh?"
                        back="Học cách chấp nhận rủi ro và tư duy xác suất (Thinking in Probabilities)."
                    />
                    <PainCard
                        front="Chốt non hay gồng lỗ?"
                        back="Loại bỏ cảm xúc, tuân thủ kỷ luật vô thức (The Disciplined Trader)."
                    />
                    <PainCard
                        front="Trả thù thị trường?"
                        back="Đưa tâm trí về trạng thái 'Zone' - Dòng chảy thị trường."
                    />
                </div>
            </div>
        </section>
    );
}
