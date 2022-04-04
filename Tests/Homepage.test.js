import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';
// import userEvent from '@testing-library/user-event';

describe('Homepage', () => {
	beforeEach(() => {
		render(<Home />);	
	});
	it('renders correctly', () => {
		const bannerContainer = screen.getByTestId('home-container');
		expect(bannerContainer).toBeInTheDocument();
	});
	it('renders the banner', () => {
		const banner = screen.getByTestId('banner-container');
		expect(banner).toBeInTheDocument();
	});
});

