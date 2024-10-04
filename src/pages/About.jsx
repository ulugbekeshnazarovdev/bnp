import { motion } from "framer-motion";
import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const About = () => {
    return (
        <main className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <section className="flex flex-col py-[120px] lg:flex-row">
                    {/* Left Column */}
                    <div className="lg:w-1/2 p-4">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
                                Buxoro tabiiy mahsuloti
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Fabrikamız uzoq yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan.",
                                    "Ushbu kompaniya 17 yildan beri mijozlarga xizmat ko'rsatmoqda.",
                                    "Ushbu kompaniyaning asosiy maqsadi yuqori sifatli va tejamkor mahsulotlar ishlab chiqarishdir.",
                                    "Ushbu kompaniyaning ishlab chiqarish jarayoni butunlay ekologik toza.",
                                    "Korxonada xaridorlarning talab va takliflari asosida har qanday turdagi paxta xomashyosi ishlab chiqarilishi mumkin.",
                                    "Kompaniya DongJia to‘quv mashinalarining O‘zbekistondagi rasmiy dileri hisoblanadi.",
                                    "Ayni paytda 80 dan ortiq oila o‘z oilasini moddiy jihatdan ta’minlab, korxona nufuzi va muvaffaqiyatiga hissa qo‘shmoqda.",
                                    "Bu talabni qondirish uchun 50 ta to‘quv dastgohi to‘xtovsiz yuqori tezlikda ishlamoqda.",
                                    "Oyiga 200-250 ming metr gazlama to‘qish quvvatiga egamiz.",
                                    "Mijozlarning yuqori talabidan kelib chiqib, korxonada yuqori sifatli yuqori sifatli eko-sumkalar ishlab chiqarish yo‘lga qo‘yildi.",
                                    "“Bukhara Natural Product” kompaniyasi oʻz sodiq mijozlariga istalgan vaqtda xizmat koʻrsatishdan mamnun.",
                                ].map((text, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-2"
                                    >
                                        <IoCheckmarkDoneOutline className="h-8 w-8" />

                                        <p className="text-gray-700">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 h-full p-4">
                        <motion.div
                            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png"
                                alt="Business People"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
