import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Banner from '../Components/Banner';
import Provider from '../Context/Provider';

const Home = () => {
	return (
		<Provider>
			<div className={styles.container} data-testid='home-container'>
				<Head>
					<title>Next Coffee</title>
					<meta name="description" content="An coffeshop finder build with Next.js" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className={styles.main}>
					<Banner />
				</main>
			</div>
		</Provider>
	); 
};

export default Home;