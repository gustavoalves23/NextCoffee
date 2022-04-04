import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../Components/Banner';
import myContext from '../Context/MyContext';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

describe('Banner', () => {
	test('renders correctly', () => {
		const toggleNearby = jest.fn();
		render(
			<myContext.Provider value={{nearby: false, toggleNearby}}>
				<Banner />
			</myContext.Provider>
		);
		const heroTitle = screen.getByTestId('banner-container');
		expect(heroTitle).toBeInTheDocument();
	});
});