import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TelegramButton = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields!");
            return;
        }

        const token = "6709473556:AAFmY515EeMkvfTGiEPJURuSXpvlP2067-4";
        const chatId = "5503879246";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            const response = await axios.post(url, {
                chat_id: chatId,
                text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
            });

            if (response.status === 200) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                handleClose();
            } else {
                toast.error("Failed to send the message!");
            }
        } catch (error) {
            toast.error("Failed to send the message!");
        }
    };

    return (
        <div>
            <motion.div
                className="fixed top-[596px] right-4 z-50 backdrop-blur-md p-2 rounded-full flex justify-end items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
            >
                <button
                    className="flex items-center gap-2 justify-between"
                    onClick={handleOpen}
                >
                    <span className="text-xl text-gray-700 bg-white border-2 rounded-full px-5 py-2 font-medium shadow-lg inline-block animate-pulse">
                        Bizga yozing!
                    </span>
                    <span className="w-14 h-14 rounded-full flex justify-center items-center text-black shadow-lg">
                        <FaTelegram className="w-8 h-8" />
                    </span>
                </button>
            </motion.div>

            {open && (
                <div className="flex justify-center items-center h-screen fixed top-0 overflow-hidden z-50 w-full bg-slate-950/30 backdrop-blur-xl">
                    <div className="bg-white shadow-md w-[90%] max-w-[800px] h-[90%] max-h-[550px] p-4 rounded-lg border">
                        <form className="py-4" onSubmit={sendMessage}>
                            <div className="mb-3 py-2 flex justify-between items-center">
                                <h2 className="text-2xl md:text-4xl font-semibold text-center">
                                    Telegramdan xabar yuboring
                                </h2>
                                <button
                                    className="bg-black p-2 md:p-3 rounded-md text-xl md:text-2xl text-white"
                                    onClick={handleClose}
                                >
                                    <RiCloseLine />
                                </button>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="mb-2 inline-block"
                                >
                                    <b>Your Name:</b>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border rounded-md p-2 md:p-3 w-full outline-blue-500"
                                    placeholder="Your name.."
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="mb-2 inline-block"
                                >
                                    <b>Your Email:</b>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border rounded-md p-2 md:p-3 w-full outline-blue-500"
                                    placeholder="Your email.."
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="mb-2 block">
                                    <b>Message:</b>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32 border-2 p-2 md:p-3 resize-none outline-blue-500"
                                    placeholder="Write here…."
                                ></textarea>
                            </div>
                            <div>
                                <button className="w-full p-2 md:p-3 flex justify-center items-center gap-3 rounded-md border bg-black text-white hover:bg-blue-600 transition-all duration-500">
                                    <FaTelegram className="text-xl md:text-2xl" />
                                    <span>Publish</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default TelegramButton;
