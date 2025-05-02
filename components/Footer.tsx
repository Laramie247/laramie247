import { FaFacebook, FaYoutube, FaDiscord } from 'react-icons/fa';
import Logo from '@/components/logo';

const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/Laramie24x7/',
        icon: FaFacebook
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@Laramie24x7',
        icon: FaYoutube
    },
    {
        name: 'Discord',
        url: 'https://discord.gg/yyVhfFfUE2',
        icon: FaDiscord
    }
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Logo - spans 3 columns */}
                    <div className="col-span-3">
                        <Logo width={100} height={75} />
                    </div>

                    {/* Copyright - spans 6 columns */}
                    <div className="col-span-6 text-sm text-center">
                        © {new Date().getFullYear()} Laramie247 Inc.
                        <br />
                        All rights reserved.
                    </div>

                    {/* Social icons - spans 3 columns */}
                    <div className="col-span-3 flex justify-end space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors duration-200"
                                aria-label={link.name}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
