import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import news from "../../../../assets/data/news";

const NewsComponent = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Heading va Paragraph */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    Yangiliklar
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-black mt-4">
                    Buxoro tabiiy mahsuloti
                </p>
            </motion.div>

            {/* News Cards */}
            <div className="grid grid-cols-3 gap-3">
                {news.map((item) => (
                    <motion.div
                        key={item.id}
                        className="bg-white shadow-lg rounded-lg mb-8 overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: item.id * 0.2 }}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                {item.subtext}
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {item.shortText}
                            </p>
                            <Link to={`/news/${item.id}`}>
                                <button className="bg-zinc-800 w-full text-white px-4 py-2 rounded hover:bg-zinc-950 transition duration-300">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewsComponent;
