import React, { useEffect, useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

const Tabs = ({ commentsKey }) => {
    const [activeTab, setActiveTab] = useState("details");
    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [comments, setComments] = useState([]);

    const handleTabChange = (tab) => setActiveTab(tab);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCommentForm((prev) => ({ ...prev, [name]: value }));
    };

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
        localStorage.setItem(commentsKey, JSON.stringify(updatedComments));
        setActiveTab("comments");
    };

    useEffect(() => {
        const storedComments = localStorage.getItem(commentsKey);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [commentsKey]);

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
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

            <div className="mt-6">
                {activeTab === "details" && (
                    <div className="text-gray-600">
                        Bu yerda tafsilotlar bo'ladi.
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
                        <form onSubmit={handleFormSubmit} className="space-y-4">
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
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-3 px-6 rounded-md text-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition duration-300"
                            >
                                Izohni yuborish
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
