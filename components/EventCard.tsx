import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/data/communityEvents';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Link href={`/event_board/${event.slug}`} className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {event.frequency}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed flex-grow">
                    {event.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm font-semibold text-primary">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;
