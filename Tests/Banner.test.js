import Banner from '../Components/Banner';
import myContext from '../Context/MyContext';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';

let toggleNearby;

describe('Banner', () => {
	beforeEach(() => {
		toggleNearby = jest.fn();
		render(
			<myContext.Provider value={{nearby: false, toggleNearby}}>
				<Banner />
			</myContext.Provider>
		);
	});
	it('renders correctly', () => {
		const bannerContainer = screen.getByTestId('banner-container');
		expect(bannerContainer).toBeInTheDocument();
	});
});