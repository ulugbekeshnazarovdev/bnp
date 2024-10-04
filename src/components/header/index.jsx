import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import Framer Motion
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import LanguageDropdown from "../utils/lang";

const navigation = [
    { name: "Uy", href: "/" },
    { name: "To'plam", href: "/collection" },
    { name: "Biz haqimizda", href: "/about-me" },
    { name: "Kontaktlar", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="fixed bg-white inset-x-0 top-0 z-50 w-full shadow-md">
                <nav className="px-4 py-3 lg:px-8">
                    <div className="container mx-auto xl:px-5 xs:px-none">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center flex-shrink-0">
                                <Link to="/" className="flex items-center">
                                    <img
                                        src={Logo}
                                        alt="Company Logo"
                                        className="h-10 w-auto"
                                    />
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                </Link>
                            </div>

                            <div className="hidden lg:flex items-center space-x-8">
                                {navigation.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.1 }} // Scale up on hover
                                        transition={{ duration: 0.2 }} // Smooth transition
                                    >
                                        <Link
                                            to={item.href}
                                            className="text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition duration-150 ease-in-out"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Hide LanguageDropdown on large screens */}
                                <div className="hidden lg:inline-block">
                                    <LanguageDropdown />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="lg:hidden rounded-md bg-black p-2 text-white focus:outline-none"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <Dialog
                    as={motion.div} // Use Framer Motion for the Dialog
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    className="lg:hidden"
                    aria-labelledby="dialog-title"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 300 }} // Initial animation state
                        animate={{ opacity: 1, x: 0 }} // Final animation state
                        exit={{ opacity: 0, x: 300 }} // Exit animation state
                        transition={{ duration: 0.3 }} // Transition duration
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 shadow-xl"
                    >
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={Logo}
                                    alt="Company Logo"
                                    className="h-8 w-auto"
                                />
                                <span className="sr-only">Your Company</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-md bg-black p-2 text-white focus:outline-none"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} // Initial animation state for menu items
                            animate={{ opacity: 1, y: 0 }} // Final animation state for menu items
                            exit={{ opacity: 0, y: -20 }} // Exit animation state for menu items
                            transition={{ duration: 0.2 }} // Transition duration
                            className="mt-6 flow-root"
                        >
                            <div className="space-y-2">
                                {navigation.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.05 }} // Scale up on hover
                                        transition={{ duration: 0.2 }} // Smooth transition
                                    >
                                        <Link
                                            to={item.href}
                                            className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                {/* Show LanguageDropdown in mobile menu */}
                                <div className="p-2">
                                    <LanguageDropdown />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </Dialog>
            </header>
        </div>
    );
}
