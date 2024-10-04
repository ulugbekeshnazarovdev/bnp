import { motion } from "framer-motion";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, phone, message } = formData;

        const telegramMessage = `
            📧 Email: ${email}
            📱 Phone: ${phone}
            📝 Message: ${message}
        `;

        const telegramBotToken =
            "6709473556:AAFmY515EeMkvfTGiEPJURuSXpvlP2067-4";
        const telegramChatId = "5503879246";
        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        try {
            await fetch(telegramUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: telegramMessage,
                }),
            });

            // Clear the form
            setFormData({
                email: "",
                phone: "",
                message: "",
            });

            // Show success toast notification
            toast.success("Your message has been sent successfully!");
        } catch (error) {
            // Show error toast notification
            toast.error("Failed to send the message. Please try again.");
        }
    };

    return (
        <main id="main" className="flex flex-col items-center w-full">
            <div className="w-full max-w-7xl py-[120px] px-4 ">
                <ToastContainer />
                <section className="flex flex-wrap items-center justify-center py-8">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 p-4 bg-white animate-pulse shadow-lg border-2 border-slate-400/20 rounded-md">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-4xl font-black">Aloqa</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <form
                                className="space-y-6 mt-8"
                                onSubmit={handleSubmit}
                            >
                                <label className="block">
                                    <input
                                        className="border p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Sizning elektron pochtangiz"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <input
                                        className="border p-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Telefon raqami"
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <textarea
                                        className="border p-4 w-full h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Sizning xabaringiz shu yerda"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </label>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-600 w-full text-white py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition duration-300"
                                >
                                    Yuborish
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full md:w-1/2 p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="h-[300px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&t=m&z=17&output=embed&iwloc=near"
                                    title="Location"
                                    aria-label="Map Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-white shadow-lg rounded-md"
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">
                                Biz bilan bog'lanish
                            </h4>
                            <p>
                                E-mail:{" "}
                                <a
                                    href="mailto:info@yourdomain.com"
                                    className="text-blue-500"
                                >
                                    info@yourdomain.com
                                </a>
                            </p>
                            <p>Tel: +1 234 567 890</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-white shadow-lg rounded-md"
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">
                                Bizning manzilimiz
                            </h4>
                            <p>1234 Street Name, City, Country</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 bg-white shadow-lg rounded-md"
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold">
                                Bizning soatlar
                            </h4>
                            <p>Dushanba - Jum'a: 9:00 - 18:00</p>
                            <p>Shanba: 10:00 - 14:00</p>
                            <p>Yakshanba: Dam olish kuni</p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
