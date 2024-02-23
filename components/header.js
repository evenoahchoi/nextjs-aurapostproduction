import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="text-gray-600 body-font border-b border-gray-300"> {/* 하단 선을 추가 */}
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link legacyBehavior href="/showreel">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/AURA_LOGO_02_1.png" alt="아우라로고2" width={200} height={200} priority={true} />
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link legacyBehavior href="/"><a className="mr-5 hover:text-gray-900 font-bold">ABOUT</a></Link>
                    <Link legacyBehavior href="/projects"><a className="mr-5 hover:text-gray-900 font-bold">WORK</a></Link>
                    <Link legacyBehavior href="/showreel"><a className="mr-5 hover:text-gray-900 font-bold">SHOWREEL</a></Link>
                    <Link legacyBehavior href="/contact"><a className="mr-5 hover:text-gray-900 font-bold">CONTACT</a></Link>
                </nav>
            </div>
        </header>
    );
}
