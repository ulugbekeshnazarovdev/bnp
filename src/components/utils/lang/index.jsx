import { useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const LanguageDropdown = () => {
    const [language, setLanguage] = useState("uz");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log("Tanlangan til:", e.target.value);
        // Bu yerda tilni o'zgartirish uchun kerakli logikani qo'shishingiz mumkin
    };

    return (
        <div className="relative inline-block w-48">
            <select
                value={language}
                onChange={handleLanguageChange}
                className="appearance-none cursor-pointer w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
                <option value="uz">Uzbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-gray-700">
                <SlArrowUp className="h-4 w-4 rotate-180" />
            </div>
        </div>
    );
};

export default LanguageDropdown;
