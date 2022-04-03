import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './style.module.css';

function coffeeStore() {
	const {query: {id}} = useRouter();
	return (
		<div className={styles.container} data-test='coffee-store-container'>
			<Link href='/'>
				<a className={styles.back_homepage_link}>Back to home!</a>
			</Link>
      This is the coffee-store {id} route!
		</div>
	);
}

export default coffeeStore;