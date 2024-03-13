"use client";

import '../styles/globals.css'
// 다음 코드는 _app.js 파일 내에 위치해야 합니다.
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
      <style>{`
          .spinner {
            margin: 100px auto;
            width: 50px;
            height: 40px;
            text-align: center;
            font-size: 10px;
          }

          .spinner > div {
            background-color: #000000;
            height: 100%;
            width: 6px;
            display: inline-block;
            margin-left: 2px;
            border-radius: 8px; /* 모서리를 둥글게 */
            animation: stretchdelay 1.2s infinite ease-in-out;
          }

          .spinner .rect2 {
            animation-delay: -1.1s;
          }

          .spinner .rect3 {
            animation-delay: -1.0s;
          }

          .spinner .rect4 {
            animation-delay: -0.9s;
          }

          .spinner .rect5 {
            animation-delay: -0.8s;
          }

          @keyframes stretchdelay {
            0%, 40%, 100% { transform: scaleY(0.4); }  
            20% { transform: scaleY(1.0); }
          }
        `}</style>
      </Head>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
