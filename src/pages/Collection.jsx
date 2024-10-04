import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import autumn from "../assets/data/autumn";
import summer from "../assets/data/summer";
import winter from "../assets/data/winter";
import SearchImage from "../assets/img/notsearch.png";

const Collection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("winter");

    const getSelectedCollectionData = () => {
        switch (selectedCollection) {
            case "winter":
                return winter;
            case "summer":
                return summer;
            case "autumn":
                return autumn;
            default:
                return [];
        }
    };

    const filteredData = getSelectedCollectionData().filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCollectionChange = (e) => {
        setSelectedCollection(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto px-5 py-[120px]">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                {/* Left Sidebar */}
                <motion.div
                    className="bg-slate-100 p-4 w-full lg:w-[30%] rounded-md mb-6 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form className="mb-6" onSubmit={handleFormSubmit}>
                        <div className="flex gap-2 items-center bg-white p-2 rounded-full">
                            <input
                                type="search"
                                placeholder="search products..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="p-2 outline-none rounded-full w-full"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-800 duration-700 transition-all text-white p-3 rounded-full text-xl"
                            >
                                <IoIosSearch />
                            </button>
                        </div>
                    </form>
                    <div className="p-2">
                        <h3 className="mb-5 text-2xl font-bold">To'plamalar</h3>
                        <form>
                            {["winter", "summer", "autumn"].map(
                                (collection) => (
                                    <motion.label
                                        key={collection}
                                        htmlFor={`${collection}_collection`}
                                        className="mb-4 flex items-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <input
                                            type="radio"
                                            name="collection"
                                            id={`${collection}_collection`}
                                            value={collection}
                                            checked={
                                                selectedCollection ===
                                                collection
                                            }
                                            onChange={handleCollectionChange}
                                            className="w-6 h-6"
                                        />
                                        <span className="font-semibold text-lg pl-2 text-green-400">
                                            {collection
                                                .charAt(0)
                                                .toUpperCase() +
                                                collection.slice(1)}{" "}
                                            Kolleksiya
                                        </span>
                                    </motion.label>
                                )
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    className="bg-slate-100 p-4 w-full lg:w-[70%] rounded-md"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredData.length ? (
                            filteredData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="bg-zinc-500 text-white p-3 rounded-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div>
                                        <img
                                            className="rounded-md object-cover w-full h-48"
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                    <h4 className="font-bold mt-2">
                                        {item.name}
                                    </h4>
                                    <p className="text-md block mb-2">
                                        {item.title.slice(0, 15)}...
                                    </p>
                                    <Link
                                        to={`/collection/${item.id}`}
                                        className="text-white p-2 flex rounded-md hover:bg-green-200 transition-all duration-300 justify-center gap-3 items-center hover:text-black bg-green-500"
                                    >
                                        <FaCartArrowDown />{" "}
                                        <span>Add to Cart</span>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center w-full">
                                <img
                                    className="object-cover w-[250px] sm:w-[300px] lg:w-[400px]"
                                    src={SearchImage}
                                    alt="No results found"
                                />
                                <p className="text-2xl text-red-500 mt-4">
                                    Hech narsa topilmadi.
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Collection;
