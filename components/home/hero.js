import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <Image src="/HOMEPAGE_ABOUT_choice-01.jpg" alt="아우라어바웃" width={1000} height={1000} priority={true}/>
        </div>
    );
}
