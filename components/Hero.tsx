import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative min-h-[80vh] w-full bg-background-dark">
            <div className="container mx-auto px-4 h-full">
                <div className="grid md:grid-cols-2 gap-8 items-center h-full py-16 relative">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-light mb-4">
                            Laramie's Voice. Streaming 24/7
                        </h1>
                        <p className="text-sm md:text-2xl sm:text-xl  text-gray-200 mb-8">
                            Grassroots news and shows, made in Laramie. <br /> Watch on Roku anytime.
                        </p>
                        <div className="flex flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="/live"
                                className="flex-1 max-w-[200px] bg-accent hover:bg-accent-hover text-white px-4 sm:px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                            >
                                Watch Now
                            </Link>
                            <Link
                                href="/about"
                                className="flex-1 max-w-[200px] bg-transparent border-2 border-white text-white px-4 sm:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="absolute bottom-6 right-0 md:right-auto md:left-0">
                            <Link
                                href="https://channelstore.roku.com/details/f8b5e6a0234979a1e45d6528f872fc51:ccea0f52ff39c2fb4536d79122ebe8ac/laramie247"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                Looking for the Roku app? →
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full">
                        <Image
                            src="/chris.webp"
                            alt="Laramie247 Background"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 