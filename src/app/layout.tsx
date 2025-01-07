import React from 'react';
import { Carme } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const inter = Carme({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sanyam',
  description: 'Sanyam Counselling center',
};

const RootLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
