import LiveStream from '@/components/LiveStream';

export const metadata = {
    title: 'Live Broadcast | Laramie 24x7',
    description: 'Watch our live broadcast streaming from Laramie, Wyoming',
};

export default function LivePage() {
    return (
        <main>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-white mb-8">Live Broadcast</h1>
                <LiveStream />
            </div>
        </main>
    );
} 