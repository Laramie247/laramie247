'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaFacebook, FaLink } from 'react-icons/fa';
import { useRef } from 'react';
import { Event } from '@/data/communityEvents';

const iconMap: { [key: string]: React.ElementType } = {
    FaFacebook: FaFacebook,
    default: FaLink
};

export default function EventDetails({ event }: { event: Event }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the hero image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0]);

    return (
        <div ref={ref} className="min-h-screen bg-white">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-[60vh] overflow-hidden w-full bg-gray-900 flex items-end justify-center pb-16">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ y }}
                >
                    <Image
                        src={event.heroImage || event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <motion.div style={{ opacity }} className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{event.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide inline-block bg-primary/80 px-4 py-1 rounded-full backdrop-blur-sm">
                            {event.frequency}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-2xl p-6 md:p-12 max-w-4xl mx-auto"
                >
                    <Link href="/event_board" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors group">
                        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Event Board
                    </Link>

                    <div className="prose prose-lg max-w-none mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">About this Event</h2>
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                            {event.detailedDescription}
                        </p>
                    </div>

                    {event.socials && event.socials.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect</h3>
                            <div className="flex flex-wrap gap-4">
                                {event.socials.map((social, index) => {
                                    const IconComponent = iconMap[social.icon] || iconMap.default;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                                        >
                                            <IconComponent className="mr-2 text-xl" />
                                            <span className="font-medium">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
