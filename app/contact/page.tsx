import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Laramie 24x7',
    description: 'Get in touch with Laramie 24x7. We value your feedback and community input.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8 md:p-12 text-center bg-primary-dark text-primary-light">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="font-medium p-2 text-left text-lg opacity-90 max-w-3xl mx-auto">
                            Laramie247 Inc. is Laramie&apos;s community-powered public access TV station on Roku.
                        </p>
                        <p className="font-medium p-2 text-left text-lg opacity-90 max-w-3xl mx-auto">

                            Whether you want to create a show, get involved with broadcast production,
                            request coverage for a community event, or learn more about supporting our
                            mission, this form is the best way to reach us.
                        </p>
                    </div>

                    <div className="p-2 md:p-2 text-center bg-white flex flex-col items-center justify-center min-h-[100px]">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdjYgZ8jN4B6i8P2-CDN30S4L9E0weNhN6jTKnSW7561vcn0g/viewform?usp=sf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-accent rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
