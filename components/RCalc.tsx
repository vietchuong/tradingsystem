"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function RCalc() {
    const [capital, setCapital] = useState<number>(10000);
    const [riskPercent, setRiskPercent] = useState<number>(1);
    const [entry, setEntry] = useState<number>(150);
    const [stoploss, setStoploss] = useState<number>(140);

    const riskAmount = (capital * riskPercent) / 100;
    const priceDiff = Math.abs(entry - stoploss);
    const positionSize = priceDiff > 0 ? Math.floor(riskAmount / priceDiff) : 0;
    const totalValue = positionSize * entry;

    return (
        <section className="py-24 bg-navy-light relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Công Cụ Quản Lý Vốn <br />
                        <span className="text-emerald">R-Calculator</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Trước khi nghĩ đến lợi nhuận, hãy nghĩ đến rủi ro. Sử dụng công cụ
                        này để tính toán khối lượng lệnh chuẩn xác theo quy tắc 1-2%.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-gray-300">
                            <Calculator className="w-5 h-5 text-emerald mr-3" />
                            Tự động tính toán khối lượng
                        </li>
                        <li className="flex items-center text-gray-300">
                            <Calculator className="w-5 h-5 text-emerald mr-3" />
                            Kiểm soát rủi ro tuyệt đối
                        </li>
                    </ul>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-navy border border-gray-700 p-8 rounded-2xl shadow-2xl"
                >
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-xs uppercase text-gray-500 mb-2">
                                Vốn (USD)
                            </label>
                            <input
                                type="number"
                                value={capital}
                                onChange={(e) => setCapital(Number(e.target.value))}
                                className="w-full bg-navy-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-gray-500 mb-2">
                                Rủi ro (%)
                            </label>
                            <input
                                type="number"
                                value={riskPercent}
                                onChange={(e) => setRiskPercent(Number(e.target.value))}
                                className="w-full bg-navy-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-xs uppercase text-gray-500 mb-2">
                                Entry Price
                            </label>
                            <input
                                type="number"
                                value={entry}
                                onChange={(e) => setEntry(Number(e.target.value))}
                                className="w-full bg-navy-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-gray-500 mb-2">
                                Stoploss Price
                            </label>
                            <input
                                type="number"
                                value={stoploss}
                                onChange={(e) => setStoploss(Number(e.target.value))}
                                className="w-full bg-navy-light border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                            />
                        </div>
                    </div>

                    <div className="bg-navy-light rounded-xl p-6 border border-gray-800">
                        <div className="flexjustify-between items-center mb-4 pb-4 border-b border-gray-800">
                            <span className="text-gray-400">Rủi ro tối đa:</span>
                            <span className="text-red-400 font-mono font-bold">
                                ${riskAmount.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Khối lượng (Shares):</span>
                            <span className="text-2xl text-emerald font-bold font-mono">
                                {positionSize.toLocaleString()}
                            </span>
                        </div>
                        <div className="mt-2 text-right text-xs text-gray-600">
                            Giá trị lệnh: ${totalValue.toLocaleString()}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
