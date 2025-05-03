import Link from "next/link";
import Image from "next/image";
import tunnel_friends from "@/public/404.webp";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Uh Oh!</h1>
            <Image src={tunnel_friends} alt="404" width={300} height={300} />
            <p className="text-gray-600">This page doesn't exist. We have our finest tunnel friends on the case!</p>
            <Link href="/" className="text-blue-500 hover:text-blue-600">Go back to the home page</Link>
        </div>
    );
}