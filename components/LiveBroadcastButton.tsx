import Link from 'next/link';

export default function LiveBroadcastButton() {
    return (
        <Link
            href="/live"
            className="inline-flex items-center space-x-2 bg-accent/20 hover:bg-accent/90 px-4 py-2 rounded-full transition-all duration-300 text-primary-dark font-bold text-lg hover:text-primary-light hover:shadow-md hover:shadow-accent/50"
        >
            <div className="relative">
                <div className="w-2 h-2 bg-red-600 rounded-full" />
                <div className="absolute -inset-1 bg-red-600/50 rounded-full animate-ping" />
            </div>
            <span>Live Broadcast</span>
        </Link>
    );
} 