import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const Collections = ({ heading, paragriph, product }) => {
    return (
        <div className="container-full mx-auto px-6 py-8">
            <div className="mb-5 py-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold font-sans text-center text-black">
                    {heading}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-black font-sans font-medium text-center">
                    {paragriph}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-8">
                {product.map((item) => (
                    <motion.div
                        key={item.id}
                        className="cursor-pointer border p-4 rounded-lg shadow-lg"
                        initial={{ scale: 1 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            duration: 0.6,
                            damping: 20,
                        }}
                    >
                        <motion.img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-64 object-cover rounded-md mb-4"
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.h2
                            className="text-xl font-bold"
                            whileHover={{ color: "#4f46e5" }}
                            transition={{ duration: 0.4 }}
                        >
                            {item.name}
                        </motion.h2>
                        <p className="text-gray-600">{item.category}</p>
                        <Link
                            to={`/product/${item.id}`}
                            className="text-indigo-600 hover:bg-black p-4 rounded-md hover:text-white duration-700 transition-all  mt-4 inline-block"
                        >
                            View Details
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collections;
