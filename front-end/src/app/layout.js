'use client';
import './globals.css';
import Providers from '@/contexts/Providers';

// link fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import MyNavbar from '@/components/navbar/MyNavbar';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';
config.autoAddCss = false;

export const metadatasite = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};	

export default function RootLayout({ children }) {
	const [selectedCategoryId, setSelectedCategoryId] = useState(null);

	const handleCategoryClick = (categoryId) => {
		setSelectedCategoryId(categoryId);			
	}

	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Providers>
					<MyNavbar onCategoryClick={handleCategoryClick} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
