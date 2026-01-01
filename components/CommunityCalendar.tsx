
import React from 'react';
import { getUpcomingEvents } from '@/lib/googleCalendar';

export const revalidate = 60; // Revalidate every minute

const CommunityCalendar = async () => {
    const events = await getUpcomingEvents();

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary p-6 text-white">
                <h2 className="text-2xl font-bold">Community Calendar</h2>
                <p className="text-primary-foreground/80 mt-1">Upcoming events in Laramie</p>
            </div>

            <div className="p-6">
                {!events || events.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <p>No upcoming events found or calendar not connected.</p>
                        <p className="text-sm mt-2">Check back soon!</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {events.map((event) => {
                            const startDate = new Date(event.start);
                            const timeString = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

                            return (
                                <a
                                    key={event.id}
                                    href={event.htmlLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-4 hover:bg-gray-50 transition-colors group px-2 rounded-lg"
                                >
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-16 text-center mr-4 pt-1">
                                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">{startDate.toLocaleDateString('en-US', { month: 'short' })}</div>
                                            <div className="text-2xl font-bold text-gray-800">{startDate.getDate()}</div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors text-lg">
                                                {event.summary}
                                            </h3>
                                            <div className="flex flex-wrap text-sm text-gray-500 mt-1 gap-x-4">
                                                <span className="flex items-center">
                                                    🕑 {timeString}
                                                </span>
                                                {event.location && (
                                                    <span className="flex items-center">
                                                        📍 {event.location}
                                                    </span>
                                                )}
                                            </div>
                                            {event.description && (
                                                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                                    {event.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommunityCalendar;
