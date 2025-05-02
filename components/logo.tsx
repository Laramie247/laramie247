import Image from "next/image";
import logo from '@/public/banner_logo_cropped_alpha.png'

interface LogoProps {
    width?: number;
    height?: number;
}

export default function Logo({ width = 300, height = 100 }: LogoProps) {
    return (
        <Image src={logo} alt="logo" width={width} height={height} />
    )
}