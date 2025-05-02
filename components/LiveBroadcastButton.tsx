import Link from 'next/link';

export default function LiveBroadcastButton() {
    return (
        <Link
            href="/live"
            className="inline-flex items-center space-x-2 bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full transition-all duration-300"
        >
            <div className="relative">
                <div className="w-2 h-2 bg-red-600 rounded-full" />
                <div className="absolute -inset-1 bg-red-600/50 rounded-full animate-ping" />
            </div>
            <span className="text-white font-medium">Live Broadcast</span>
        </Link>
    );
} 