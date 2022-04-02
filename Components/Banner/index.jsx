import React from 'react';
import { useState, useContext } from 'react';
import myContext from '../../Context/MyContext';
import style from './style.module.css';

const Banner = () => {
	const [isFetching, toggleFetching] = useState(false);
	const {toggleNearby} = useContext(myContext);
	return (
		<div className={style.container} data-test='banner-container'>
			<h1 className={style.title}>
				<span>Coffee </span>
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