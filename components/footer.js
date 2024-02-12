import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="text-gray-600 body-font" style={{ backgroundColor: '#494949' }}>
                <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
                    <Link legacyBehavior href="/showreel">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <Image src="/AURA_LOGO_01_1.png" alt="아우라로고1" width={300} height={300} priority={true} />
                        </a>
                    </Link>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <div className="relative flex flex-wrap py-6" style={{ backgroundColor: '#494949' }}>
                        <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">OUR OFFICE</h2>
                                <p className="title-font font-semibold text-gray-300 leading-relaxed text-xs">
                                    서울특별시 강남구 언주로 107길 40 B1</p>
                                <p className="title-font font-semibold text-gray-300 leading-relaxed text-xs">
                                    (역삼동 651-15번지 지하1층)</p>
                                <p className="title-font font-semibold text-gray-300 leading-relaxed text-xs">
                                    40, Eonju-ro 107-gil, Gangnam-gu, Seoul, Republic of Korea</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-gray-300 leading-relaxed">AURA_DI@DAUM.NET</a>
                        <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs mt-4">TEL</h2>
                        <p className="text-gray-300 leading-relaxed">02-564-4353</p>
                        </div>
                    </div>
                    </a>
                </div>
            </footer>
        </>
    );
}
