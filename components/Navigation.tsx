'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from "./logo";
import LiveBroadcastButton from './LiveBroadcastButton';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigationItem {
    label: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary-light text-primary-dark py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Logo */}
                    <div className="col-span-3">
                        <Link href="/" aria-label="Home">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Navigation with Live Broadcast */}
                    <div className="hidden md:flex col-span-9 justify-end items-center">
                        <div className="flex items-center space-x-8">
                            <LiveBroadcastButton />
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-gray-300 transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/donate"
                                className="bg-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-xs hover:shadow-amber-500/50 font-bold"
                            >
                                Donate
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="block md:hidden col-span-9">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white focus:outline-none"
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Slide-out sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="p-4">
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white focus:outline-none"
                                aria-label="Close menu"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <LiveBroadcastButton />
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-white hover:text-gray-300 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/donate"
                                className="bg-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-xs hover:shadow-amber-500/50 font-bold text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Donate
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </div>
        </nav>
    );
}

