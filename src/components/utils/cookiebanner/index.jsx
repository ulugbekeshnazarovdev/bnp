import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie-consent";

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem(COOKIE_NAME);
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_NAME, "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-50">
            <p className="text-sm">
                Biz veb-saytimizda sizga eng yaxshi tajribani taqdim etishimiz
                uchun cookie-fayllardan foydalanamiz. Agar siz ushbu saytdan
                foydalanishda davom etsangiz, biz sizni undan mamnun deb
                hisoblaymiz.
            </p>
            <button
                onClick={handleAccept}
                className="bg-white text-black px-4 py-2 rounded-md text-sm"
            >
                Ok
            </button>
        </div>
    );
};
