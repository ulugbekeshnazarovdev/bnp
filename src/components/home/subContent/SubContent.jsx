import { motion } from "framer-motion";
import React from "react";

const SubContent = (props) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="container mx-auto px-5 py-[20px] lg:py-[20px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div
                style={{ backgroundColor: props.background }}
                className="rounded-2xl p-10 relative flex flex-col items-center lg:flex-row lg:items-stretch lg:h-[80vh] max-h-[1400px] overflow-hidden"
            >
                <div className="absolute inset-0 z-10">
                    <img
                        src={props.imageBg}
                        alt="Nature"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left w-full h-full z-20 relative">
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-10 flex flex-col justify-center items-center lg:items-start"
                    >
                        <h2 className="text-5xl lg:text-[160px] text-white font-bold drop-shadow-lg">
                            100%
                        </h2>
                        <p className="text-white text-lg lg:text-3xl font-medium mt-4 drop-shadow-lg">
                            Material sifatli
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/3 flex justify-center items-center"
                    >
                        <img
                            src={props.imageCenter}
                            alt="Nature"
                            className="w-full max-w-[900px] h-auto object-contain rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/3 bg-black/15 backdrop-blur-lg p-4 shadow-lg rounded-lg lg:pl-10 flex flex-col justify-center items-center lg:items-end"
                    >
                        <h2 className="text-2xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-lg text-center lg:text-right">
                            Buxoro tabiiy mahsuloti
                        </h2>
                        <p className="text-white mt-4 lg:mt-6 drop-shadow-lg text-center lg:text-right">
                            Ko'p yillar davomida butun dunyoda foydalanish uchun
                            paxta matolarini ishlab chiqaradigan kompaniya
                            bo'lib kelgan
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 py-2 px-6 border-2 border-white rounded-full text-black text-xl font-bold bg-white hover:text-black transition-all duration-300"
                        >
                            To'plam
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SubContent;
