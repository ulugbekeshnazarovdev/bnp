import { motion } from "framer-motion";
import HeroImages from "../../../assets/img/introimg.png";
import Badge from "../../../assets/img/noun_badge.svg";
import Dilvery from "../../../assets/img/noun_delivery.svg";
import Listen from "../../../assets/img/noun_listen.svg";
import Wallet from "../../../assets/img/noun_wallet.svg";

export const Hero = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative top-20">
            <motion.div
                className="w-full mb-10 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[780px] p-4 sm:p-6 md:p-8 lg:p-20 flex justify-end items-center bg-[#464342] rounded-md bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroImages})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", // Center background image
                    backgroundSize: "cover", // Default size for small to medium screens
                }}
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Final animation state
                transition={{ duration: 1 }} // Transition duration
            >
                <motion.div
                    className="text-white backdrop-blur-md rounded-md border-zinc-500 p-4 sm:p-6 md:p-8"
                    initial={{ opacity: 0, scale: 0.8 }} // Initial animation state for text
                    animate={{ opacity: 1, scale: 1 }} // Final animation state for text
                    transition={{ duration: 1, delay: 0.5 }} // Transition duration and delay
                >
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-full text-right">
                            Buxoro
                        </h3>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold w-full text-right">
                            Tabiiy
                        </h3>
                        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold w-full text-right">
                            Mahsulot
                        </h3>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="w-full h-auto mb-28 flex max-lg:flex-col gap-6 items-center"
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Final animation state
                transition={{ duration: 1, delay: 1 }} // Transition duration and delay
            >
                {[
                    {
                        src: Dilvery,
                        title: "Yetkazib berish bepul",
                        description:
                            "Barcha buyurtmalar uchun bepul yetkazib berish",
                    },
                    {
                        src: Badge,
                        title: "Qaytish kafolati",
                        description:
                            "30 kunlik pulni qaytarish imkonyati mavjud.",
                    },
                    {
                        src: Listen,
                        title: "24/7 onlayn qo'llab-quvvatlash",
                        description: "24/7 texnik yordam",
                    },
                    {
                        src: Wallet,
                        title: "Xavfsiz to'lov",
                        description: "Barcha to'lov usullari qabul qilinadi",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col sm:flex-row md:flex-row lg:flex-col w-full h-auto  justify-start gap-4 shadow-md bg-white p-4 rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }} // Initial animation state for each item
                        animate={{ opacity: 1, scale: 1 }} // Final animation state for each item
                        transition={{ duration: 0.5 }} // Transition duration for each item
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-12 h-12 md:w-16 md:h-16"
                        />
                        <div>
                            <h4 className="text-2xl font-semibold mb-3">
                                {item.title}
                            </h4>
                            <span>{item.description}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
