'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface TierCardProps {
    title: string;
    price: {
        monthly: string;
        yearly: string;
    };
    benefits: string[];
    imageUrl?: string;
    previousTier?: string;
}

const TierCard = ({ title, price, benefits, imageUrl, previousTier }: TierCardProps) => {
    const imageSrc = imageUrl || `https://picsum.photos/seed/${title}/300/`;

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
            whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{title}</h3>
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-900">Monthly: {price.monthly}</p>
                    <p className="text-lg font-semibold text-gray-900">Yearly: {price.yearly}</p>
                </div>
                <ul className="space-y-3">
                    {benefits.map((benefit, index) => {
                        // Check if the benefit mentions a previous tier
                        const isPreviousTier = previousTier && benefit.toLowerCase().includes(previousTier.toLowerCase());

                        return (
                            <li key={index} className="flex items-start">
                                <FaCheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                                <span className={`text-gray-700 ${isPreviousTier ? 'font-semibold text-primary-dark' : ''}`}>
                                    {benefit}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.div>
    );
};

export default TierCard; 