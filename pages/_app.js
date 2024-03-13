"use client";

import '../styles/globals.css'
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
          @keyframes shake {
            0% { transform: translateX(-50%) rotate(0deg); }
            20% { transform: translateX(-50%) rotate(-10deg); }
            40% { transform: translateX(-50%) rotate(10deg); }
            60% { transform: translateX(-50%) rotate(-10deg); }
            80% { transform: translateX(-50%) rotate(10deg); }
            100% { transform: translateX(-50%) rotate(0deg); }
          }

          .aura-loading {
            position: absolute;
            top: 5%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            font-weight: bold;
            animation: shake 2s infinite;
          }
        `}</style>
      </Head>
      {loading && (
        <div className="aura-loading">AURA</div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
