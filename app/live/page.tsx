import LiveStream from '@/components/LiveStream';

export const metadata = {
    title: 'Live Broadcast | Laramie 24x7',
    description: 'Watch our live broadcast streaming from Laramie, Wyoming',
};

export default function Live() {
    return (
        <main className="bg-background-dark flex flex-col ">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-white mb-8">Live Broadcast</h1>
                <LiveStream />
            </div>
            <div className="container text-white mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">We're on Roku!</h1>
                <p className="mb-4">Check out our channel: <a
                    href="https://channelstore.roku.com/details/f8b5e6a0234979a1e45d6528f872fc51:ccea0f52ff39c2fb4536d79122ebe8ac/laramie247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition-colors duration-200"
                >Laramie247</a></p>
                <h2 className="text-xl font-semibold mb-4">How to find us on Roku</h2>
                <ol className="space-y-2 max-w-2xl">
                    <li className="flex gap-2">
                        <span className="text-gray-400">1.</span>
                        <span>Power up your Roku device</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">2.</span>
                        <span>Scroll down and select "Streaming Store" from the main menu</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">3.</span>
                        <span>Select the "Search" box and type in "Laramie247"</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">4.</span>
                        <span>Select "Laramie247" from the list of search results</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">5.</span>
                        <span>Select "Add App"</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">6.</span>
                        <span>Select "Ok" when the channel has been added</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">7.</span>
                        <span>Return to the homepage of your Roku device</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">8.</span>
                        <span>Scroll to the apps on the right of the homepage and scroll down until you see the Laramie247 icon</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-gray-400">9.</span>
                        <span>Select the Laramie247 icon to launch the channel!</span>
                    </li>
                </ol>
            </div>
        </main>
    );
} 