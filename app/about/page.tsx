import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-background-light min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black">
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        About Laramie247
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow-md">
                        Creating community through media. A platform for voices to be heard and stories to be told.
                    </p>
                </div>
            </section>

            {/* Our History */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Our History</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
                        <p className="text-lg text-gray-700 leading-relaxed text-left md:text-center mb-6">
                            Founded on January 1st, 2023, Laramie247 Inc. hit the ground running with a clear mission: to serve our community by providing top-notch broadcast and streaming services. Right from the start, we partnered with local organizations, including the City of Laramie, and leveraged the dedication of our volunteer staff to fuel our growth.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-left md:text-center">
                            After a year of hard work, we proudly achieved 501(c)(3) status on April 15th, 2024. This milestone marked the culmination of two years of meticulous planning, equipment acquisition, and software development. Today, we’re thrilled to announce the completion of our state-of-the-art television studio and two fully-equipped mobile production studios. With these resources in place, we are now more than ready to fulfill our mission: to bring Laramie high-quality news broadcasts and programming made by our community for our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600">The core principles that guide our work every day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Politically Neutral */}
                        <div className="bg-background-light p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Politically Neutral</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Our viewers come from all walks of life. At Laramie247 it is our goal to be an impartial voice of reason, focusing on fair and balanced programing made by our diverse membership.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We don’t play favorites, nor do we pick sides in a political debate. We are focused on delivering informative content that seeks to inspire dialogue between all sides, regardless of political differences and religious beliefs.
                            </p>
                        </div>

                        {/* Citizen Grounded */}
                        <div className="bg-background-light p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-md">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Citizen Grounded</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We strive to promote the needs of the citizens in our community rather than the interests of big business. We bring the community closer together through conversations about the stories and topics that matter most to them.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By doing so, we hope to foster meaningful connections that support local businesses, create employment opportunities and improve our community. With content made for our community by our community, we provide a space for voices to be heard.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aligning with City Council Goals */}
            <section className="py-16 md:py-24 bg-primary-dark text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Aligning with City Goals</h2>
                            <div className="w-20 h-1 bg-accent mb-8 rounded-full" />
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Laramie247 aligns closely with the City of Laramie&apos;s 2025 goals by fostering civic engagement, promoting transparency, and strengthening community ties. As a politically neutral and citizen-grounded public access television station, Laramie247 serves as a key platform for two-way communication between residents and city leadership, reinforcing Laramie’s values of accountability and integrity.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                The organization’s commitment to producing locally-driven news and programming directly supports the city&apos;s strategic milestone of enhancing digital and visual communication channels. Additionally, by providing a space for diverse voices and community-driven storytelling, Laramie247 contributes to public engagement efforts and economic development.
                            </p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg">
                            <h3 className="text-xl font-bold mb-6 text-accent">Shared Objectives</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-accent/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-200">Fostering civic engagement and transparency</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-accent/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-200">Strengthening community ties and partnerships</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-accent/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-200">Providing a platform for two-way communication</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-accent/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-200">Supporting local businesses and economic development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Request/Vision */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-8">Our Future Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        We are dedicated to expanding our operations and creating meaningful employment opportunities within Laramie.
                        Our growth plan includes bringing on key staff such as a show-runner, switchboard operators, camera operators, graphics specialists, and anchors.
                        These roles will not only enhance our ability to deliver high-quality, community-focused news but also provide stable careers in Laramie’s growing media sector.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-12 font-medium">
                        By growing Laramie247, we are fostering a stronger local media landscape, promoting transparency, and empowering community voices!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/membership" className="bg-accent text-white px-8 py-4 rounded-full hover:bg-accent-hover transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Become a Member
                        </Link>
                        <Link href="/contact" className="bg-transparent text-primary-dark border-2 border-primary-dark px-8 py-4 rounded-full hover:bg-primary-dark hover:text-white transition-all font-bold text-lg shadow-sm hover:shadow-lg">
                            Get Involved
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
