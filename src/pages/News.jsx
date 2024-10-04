import { Tab } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import news from "../assets/data/news";

import {
    FaCalendarAlt,
    FaCommentAlt,
    FaShare,
    FaThumbsDown,
    FaThumbsUp,
    FaUser,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const News = () => {
    const { id } = useParams();
    const item = news.find((n) => n.id === parseInt(id));
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleLike = () => setLikes((prevLikes) => prevLikes + 1);
    const handleDislike = () => setDislikes((prevDislikes) => prevDislikes + 1);
    const handleShare = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleCommentSubmit = () => {
        if (commentText.trim() !== "") {
            const newComment = {
                id: comments.length + 1,
                text: commentText,
                user: "Current User",
                timestamp: new Date(),
            };
            setComments([newComment, ...comments]);
            setCommentText("");
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="py-[120px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-lg border-2 border-white/80 rounded-lg overflow-hidden"
                >
                    <div className="p-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl font-bold mb-2"
                        >
                            {item.name}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col md:flex-row md:items-center md:space-x-2 text-gray-500"
                        >
                            <div className="flex items-center space-x-2">
                                <FaCalendarAlt className="h-4 w-4" />
                                <span>{item.subtext}</span>
                            </div>
                            <span className="mt-2 md:mt-0 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                Breaking News
                            </span>
                        </motion.div>
                    </div>

                    <motion.img
                        src={item.img}
                        alt={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-700 leading-relaxed mb-4"
                        >
                            {item.shortText}
                        </motion.p>

                        <div className="flex justify-between items-center flex-wrap gap-2">
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleLike}
                                    className="flex items-center px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <FaThumbsUp className="mr-2 h-4 w-4" />{" "}
                                    {likes}
                                </button>
                                <button
                                    onClick={handleDislike}
                                    className="flex items-center px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <FaThumbsDown className="mr-2 h-4 w-4" />{" "}
                                    {dislikes}
                                </button>
                            </div>
                            <button
                                onClick={handleShare}
                                className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >
                                <FaShare className="mr-2 h-4 w-4" /> Share
                            </button>
                        </div>
                    </div>
                </motion.div>

                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl mt-8">
                        {["Full Article", "Comments"].map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    `w-full py-2.5 text-sm font-medium leading-5 text-blue-700 rounded-lg
                                focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
                                ${
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                }`
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel className="bg-white rounded-xl p-3">
                            <h2 className="text-xl font-semibold mb-2">
                                Full Article
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {item.text}
                            </p>
                        </Tab.Panel>
                        <Tab.Panel className="bg-white rounded-xl p-3">
                            <h2 className="text-xl font-semibold mb-4">
                                Comments
                            </h2>
                            <AnimatePresence>
                                {comments.map((comment) => (
                                    <motion.div
                                        key={comment.id}
                                        {...fadeInUp}
                                        className="bg-gray-100 p-4 rounded-lg mb-4"
                                    >
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                                <FaUser />
                                            </div>
                                            <div>
                                                <p className="font-semibold">
                                                    {comment.user}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {comment.timestamp.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                        <p>{comment.text}</p>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <div className="flex flex-col md:flex-col gap-3 mt-4">
                                <textarea
                                    placeholder="Write a comment..."
                                    value={commentText}
                                    onChange={(e) =>
                                        setCommentText(e.target.value)
                                    }
                                    className="flex-grow p-2 resize-none border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Write a comment"
                                />
                                <button
                                    onClick={handleCommentSubmit}
                                    className="mt-2 md:mt-0 px-2 py-3 w-full md:w-auto text-xl bg-slate-800 text-white rounded-lg hover:bg-zinc-950 transition-colors"
                                >
                                    <FaCommentAlt className="mr-2 h-4 w-4 inline" />{" "}
                                    Comment
                                </button>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

                <AnimatePresence>
                    {showAlert && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
                        >
                            <p>Link copied to clipboard!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default News;
