import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* import the font */}
				<link rel="preload" as="font" href="/fonts/SendFlowers-Regular.ttf" crossOrigin="anonymous" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}