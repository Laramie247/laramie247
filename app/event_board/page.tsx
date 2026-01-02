import React from 'react';
import { events } from '@/data/communityEvents';
import EventCard from '@/components/EventCard';
import CommunityCalendar from '@/components/CommunityCalendar';

const EventBoardPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section */}
            <div className="bg-primary-dark text-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Event Board</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                        Discover what&apos;s happening in Laramie. From charity drives to town halls, get involved and stay connected.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10">
                {/* Event Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative z-10">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>

                {/* Calendar Section */}
                {/* <div className="max-w-5xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="h-1 bg-gray-200 flex-grow rounded"></div>
                        <h2 className="text-3xl font-bold text-gray-800 px-8">Upcoming Dates</h2>
                        <div className="h-1 bg-gray-200 flex-grow rounded"></div>
                    </div>
                    <CommunityCalendar />
                </div> */}
            </div>
        </main>
    );
};

export default EventBoardPage;


