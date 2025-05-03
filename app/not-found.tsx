import Link from "next/link";
import Image from "next/image";
import tunnel_friends from "@/public/404.webp";

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center mt-16">
            <h1 className="text-4xl font-bold">404 - Uh Oh!</h1>
            <Image src={tunnel_friends} alt="404" width={300} height={300} />
            <div className="flex flex-col items-center justify-center">
                <p className="text-center text-gray-600">This page doesn't exist. We have our finest tunnel friends on the case!</p>
                <Link href="/" className="mt-4 text-accent hover:text-accent-hover">Go back to the home page</Link>
            </div>
        </div>
    );
}