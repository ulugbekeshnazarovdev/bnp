import { motion } from "framer-motion";
import React from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";
import Logos from "../../assets/img/logo.png";

const Footer = () => {
    return (
        <footer className="bg-white text-black border-t-2">
            <div className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 80,
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* About Section */}
                    <div className="mb-8">
                        <img
                            src={Logos}
                            alt="Bukhara Natural Product"
                            className="h-12 mb-4"
                        />
                        <p className="text-gray-400">
                            “Bukhara Natural Product” koʻp yillardan buyon butun
                            dunyoda foydalanish uchun paxta matolari ishlab
                            chiqaradigan kompaniya hisoblanadi.
                        </p>
                    </div>

                    {/* Menu Section */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Menyu</h4>
                        <ul className="space-y-2">
                            {[
                                "Uy",
                                "Biz haqimizda",
                                "To'plam",
                                "Kontaktlar",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-black transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">
                            Kontaktlar
                        </h4>
                        <p className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2 text-xl" />
                            <a
                                href="tel:+998933837585"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                +998 93 383 75 85
                            </a>
                        </p>
                        <p className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2 text-xl" />
                            <a
                                href="tel:+998939607800"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                +998 93 960 78 00
                            </a>
                        </p>
                        <p className="flex items-center mb-4">
                            <FaEnvelope className="mr-2 text-xl" />
                            <a
                                href="mailto:bnpuz@bk.ru"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                bnpuz@bk.ru
                            </a>
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/bnp_fabrik"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                            <a
                                href="https://facebook.com/bnp_fabrik"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a
                                href="https://twitter.com/bnp_fabrik"
                                className="text-gray-400 hover:text-black transition-colors duration-300"
                            >
                                <FaTwitter className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Subscription Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 80,
                        }}
                        className="sm:col-span-2 lg:col-span-1 xl:w-[400px]"
                    >
                        <h4 className="text-lg font-semibold mb-4">
                            Elektron pochtamizga obuna bo'ling
                        </h4>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Elektron pochtangizni kiriting"
                                className="flex-grow p-2 border focus:outline-none focus:ring-2 focus:ring-zinc-800"
                                aria-label="Enter your email"
                            />
                            <button
                                type="submit"
                                className="bg-zinc-800 text-white px-2 py-2 hover:bg-zinc-900 transition-colors duration-300"
                            >
                                Obuna bo'ling
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className="bg-gray-800 text-gray-400 py-4 mt-8"
            >
                <div className="container mx-auto px-6 text-center">
                    <p>
                        &copy; 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha
                        huquqlar himoyalangan.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
