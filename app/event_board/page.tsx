import React from 'react';
import Image from 'next/image';
import frakenfurterferret from '@/public/frankenfurterferret.png'

const EventBoardPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-2xl font-bold text-primary-dark mb-8">Event Board</h1>
            <div className="flex justify-center mb-8">
                <Image src={frakenfurterferret} alt="Frankfurter Ferret" />
            </div>
            <p className="text-2xl font-bold text-primary-dark mb-8">Frankfurter Ferret</p>
            <p className="text-lg text-gray-600 mb-8">I haven&apos;t gotten to this page yet. Enjoy this QUEEN of a ferret -love, Kelly</p>
        </div>
    );
};

export default EventBoardPage;


