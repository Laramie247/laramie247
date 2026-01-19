'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaFacebook, FaLink, FaYoutube } from 'react-icons/fa';
import { Event } from '@/data/communityEvents';
import ComingSoonUpsell from './ComingSoonUpsell';

const iconMap: { [key: string]: React.ElementType } = {
    FaFacebook: FaFacebook,
    FaYoutube: FaYoutube,
    default: FaLink
};

export default function EventDetails({ event }: { event: Event }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-md border-b border-gray-200/50">
                <div className="max-w-3xl mx-auto px-4 md:px-8 h-16 flex items-center">
                    <Link
                        href="/event_board"
                        className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 shadow-sm group-hover:shadow transition-all group-hover:-translate-x-1">
                            <FaArrowLeft className="text-gray-400 group-hover:text-gray-700" size={12} />
                        </div>
                        Back to Board
                    </Link>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-4 md:px-8 mt-8">
                {/* Hero Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full flex justify-center mb-12"
                >
                    <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-white ring-1 ring-gray-100">
                        {/* Wrapper to maintain square aspect ratio but allow natural height if needed */}
                        <div className="relative aspect-square w-full">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className={`object-cover ${event.isComingSoon ? 'grayscale brightness-[0.7]' : ''}`}
                                priority
                            />
                            {event.isComingSoon && (
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <span className="text-white font-black text-4xl uppercase tracking-widest drop-shadow-lg border-4 border-white px-6 py-3 bg-black/30 backdrop-blur-sm -rotate-12 transform scale-125">
                                        Coming Soon
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Meta Badge */}
                    <div className="flex justify-center gap-3 mb-6">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm ring-1 ring-blue-100">
                            {event.frequency}
                        </div>
                        {event.isComingSoon && (
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm ring-1 ring-purple-100 animate-pulse">
                                Coming Soon
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-8">
                        {event.title}
                    </h1>

                    {/* Description */}
                    <div className="prose prose-lg prose-slate mx-auto text-gray-600 leading-loose mb-12 group-first-letter:float-left group-first-letter:text-4xl group-first-letter:font-bold group-first-letter:mr-2">
                        {event.detailedDescription}
                    </div>

                    {/* Coming Soon Upsell */}
                    {event.isComingSoon && (
                        <ComingSoonUpsell
                            title={event.title}
                            tagline={event.comingSoonTagline}
                        />
                    )}

                    {/* Divider */}
                    {!event.isComingSoon && <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto mb-12" />}

                    {/* Social / Connect Actions */}
                    {event.socials && event.socials.length > 0 && !event.isComingSoon && (
                        <div className="flex flex-col items-center gap-6">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                                Connect & Follow
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {event.socials.map((social, index) => {
                                    const IconComponent = iconMap[social.icon] || iconMap.default;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center px-6 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                        >
                                            <IconComponent className="mr-3 text-xl text-gray-400 group-hover:text-blue-600 transition-colors" />
                                            <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
}
