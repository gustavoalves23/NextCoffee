import React from 'react';
import { useState, useContext } from 'react';
import style from '../styles/Banner.module.css';
import myContext from '../Context/MyContext';

const Banner = () => {
	const [isFetching, toggleFetching] = useState(false);
	const {toggleNearby} = useContext(myContext);
	return (
		<div className={style.container}>
			<h1 className={style.title}>
				<span>Next </span>
				<span>Stores</span>
			</h1>
			<h2 className={style.subtitle}>
        Find your perfect coffee!
			</h2>
			<button 
				className={style.button}
				type='button'
				onClick={() => {
					if (!isFetching) {
						toggleFetching(true);
						toggleNearby(true);
					}
				}}
			>
				{ isFetching ? 'Loading...' : 'View stores nearby'}
			</button>
		</div>
	);
};

export default Banner;