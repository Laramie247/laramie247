import Image from "next/image";
import logo from '@/public/banner_logo_cropped_alpha.png'

export default function Logo() {
    return (
        <Image src={logo} alt="logo" width={300} height={100} />
    )
}