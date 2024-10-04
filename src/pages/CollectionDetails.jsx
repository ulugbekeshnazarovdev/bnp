import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaEnvelope, FaStar, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import autumn from "../assets/data/autumn";
import summer from "../assets/data/summer";
import winter from "../assets/data/winter";

// Mavjud kolleksiyalarni bitta obyektga to'pladik
const collections = { winter, summer, autumn };

const CollectionDetails = () => {
    const { id } = useParams(); // URL'dan kelgan id ni oldik
    const allItems = [...winter, ...summer, ...autumn]; // Barcha kolleksiyalardan elementlarni to'pladik
    const item = allItems.find((item) => item.id === parseInt(id)); // id bo'yicha tovarni topdik
    const [activeTab, setActiveTab] = useState("details"); // Faol tabni boshqarish uchun state
    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [comments, setComments] = useState([]);

    // Mahsulot topilmasa, xato xabari ko'rsatiladi
    if (!item) {
        return (
            <motion.div
                className="container mx-auto px-5 py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-red-500">
                    Mahsulot topilmadi
                </h2>
            </motion.div>
        );
    }

    // Tablarni o'zgartirish funksiyasi
    const handleTabChange = (tab) => setActiveTab(tab);

    // Formadagi o'zgarishlarni boshqarish funksiyasi
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCommentForm((prev) => ({ ...prev, [name]: value }));
    };

    // Formani yuborish funksiyasi
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            name: commentForm.name,
            email: commentForm.email,
            message: commentForm.message,
        };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        setCommentForm({ name: "", email: "", message: "" });
        localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments)); // Kommentlarni localStorage ga saqlash
    };

    // Kommentlarni localStorage dan olish uchun useEffect
    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${id}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [id]);

    // Animatsiya variantlari
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="container mx-auto px-5 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bg-white p-5 rounded-lg shadow-lg mb-10"
                variants={childVariants}
            >
                <div className="flex flex-col lg:flex-row gap-10">
                    <motion.img
                        src={item.img}
                        alt={item.name}
                        className="w-full lg:w-1/2 rounded-lg object-cover shadow-md"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="flex flex-col justify-center w-full lg:w-1/2">
                        <motion.h2
                            className="text-4xl font-bold mb-4"
                            variants={childVariants}
                        >
                            {item.name}
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-6 text-gray-600"
                            variants={childVariants}
                        >
                            {item.title}
                        </motion.p>
                        <motion.p
                            className="text-xl mb-6 text-gray-600"
                            variants={childVariants}
                        >
                            {item.text}
                        </motion.p>
                        <motion.p
                            className="text-xl flex justify-start items-center gap-4 bg-yellow-600 p-2 rounded-md mb-6 text-slate-950"
                            variants={childVariants}
                        >
                            <div className="w-6 h-6 animate-pulse rounded-full bg-slate-950"></div>
                            {item.category}
                        </motion.p>
                        <motion.div
                            className="flex items-center gap-4 mb-6"
                            variants={childVariants}
                        >
                            <span className="text-3xl font-bold text-green-500">
                                ${item.price}
                            </span>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </motion.div>
                        <motion.button
                            className="bg-green-500 text-white p-4 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition duration-300 text-lg font-semibold"
                            variants={childVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCartArrowDown />
                            <span>Savatga qo'shish</span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Tablar */}
            <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                variants={childVariants}
            >
                <div className="flex gap-4 mb-4 border-b">
                    {["details", "comments", "addComment"].map((tab) => (
                        <button
                            key={tab}
                            className={`p-3 font-semibold transition-all duration-300 ${
                                activeTab === tab
                                    ? "text-green-500 border-b-2 border-green-500"
                                    : "text-gray-500 hover:text-green-500"
                            }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {activeTab === "details" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">
                                    Texnik xususiyatlar
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Material: {item.material}</li>
                                    <li>O'lcham: {item.size}</li>
                                    <li>Rang: {item.color}</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">
                                    Xususiyatlar
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {item.features &&
                                        item.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "comments" && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold mb-4">Izohlar</h3>
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-4 rounded-md"
                                    >
                                        <p className="font-semibold">
                                            {comment.name}
                                        </p>
                                        <p className="text-gray-600">
                                            {comment.message}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p>Hozircha izohlar yo'q.</p>
                            )}
                        </div>
                    )}

                    {activeTab === "addComment" && (
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Izoh qoldiring
                            </h3>
                            <form
                                onSubmit={handleFormSubmit}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-2 border-b-2 pb-2">
                                    <FaUser className="text-gray-600" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={commentForm.name}
                                        onChange={handleFormChange}
                                        placeholder="Ismingiz"
                                        className="flex-grow p-2 outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2 border-b-2 pb-2">
                                    <FaEnvelope className="text-gray-600" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={commentForm.email}
                                        onChange={handleFormChange}
                                        placeholder="Email"
                                        className="flex-grow p-2 outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-start gap-2 border-b-2 pb-2">
                                    <textarea
                                        name="message"
                                        value={commentForm.message}
                                        onChange={handleFormChange}
                                        placeholder="Izohingiz"
                                        className="flex-grow p-2 outline-none"
                                        required
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="bg-green-500 text-white py-3 px-6 rounded-md text-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Izohni yuborish
                                </motion.button>
                            </form>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CollectionDetails;
