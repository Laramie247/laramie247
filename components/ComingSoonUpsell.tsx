import React from 'react';
import Link from 'next/link';
import { FaCrown } from 'react-icons/fa';

interface ComingSoonUpsellProps {
    title: string;
    tagline?: string;
}

const ComingSoonUpsell: React.FC<ComingSoonUpsellProps> = ({ title, tagline }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden my-12 border border-purple-500/30">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/20">
                    <FaCrown className="text-3xl text-yellow-400" />
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Can't wait?</h2>

                <p className="text-lg text-purple-100 max-w-2xl mb-8 leading-relaxed">
                    We're working hard to bring <span className="font-bold text-white">{title}</span> to you. {tagline} Become a member at the <span className="text-yellow-400 font-bold">Jackalope</span> level to support our team and speed up production!
                </p>
                <p className="text-xs text-purple-300 uppercase tracking-widest font-semibold"> Your support powers independent local media</p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link
                        href="/membership"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
                    >
                        Become a Member
                    </Link>
                    <Link
                        href="https://www.paypal.com/us/fundraiser/charity/5150763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-purple-800/50 backdrop-blur-sm border border-purple-400/30 text-white font-bold rounded-xl hover:bg-purple-800/70 transition-all shadow-lg"
                    >
                        Make a Donation
                    </Link>
                </div>

                <p className="mt-6 text-xs text-purple-300 uppercase tracking-widest font-semibold">
                    Your support powers independent local media
                </p>
            </div>
        </div>
    );
};

export default ComingSoonUpsell;
