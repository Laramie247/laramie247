import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary-dark mb-8">Welcome to Laramie 24x7</h1>
        <div className="grid gap-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
            <p className="text-gray-800">
              Stay tuned for the latest news and events from Laramie, Wyoming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Live Broadcast</h3>
                <p className="text-gray-300 mb-4">
                  Watch our live broadcast for real-time coverage of local events.
                </p>
                <a href="/live" className="text-indigo-400 hover:text-indigo-300">
                  Watch Now →
                </a>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Community Support</h3>
                <p className="text-gray-300 mb-4">
                  Help us continue bringing you the latest from Laramie.
                </p>
                <a href="/donate" className="text-indigo-400 hover:text-indigo-300">
                  Support Us →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
