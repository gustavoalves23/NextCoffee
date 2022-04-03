import {dataTest as dt, hexToRgb} from '../support/Utils';

describe('Banner', () => {
	beforeEach(() => {cy.visit('/');});
	it('Should have an h1 with the correct text', () => {
		cy.get(dt('banner-container')).then(($banner) => {
			cy.wrap($banner).find('h1').should('have.text', 'Coffee Stores');
		});
	});
	it('Should have an subtitle with the correct text',()=>{
		cy.get(dt('banner-container')).then(($banner) => {
			cy.wrap($banner).find('h2').should('have.text', 'Find your perfect coffee!');
		});
	});
	it('Should have a button with the correct text and styling',()=>{
		cy.get(dt('banner-container')).then(($banner) => {
			cy.wrap($banner).get('button[type=button]').then(($button) => {
				cy.wrap($button)
					.should('have.text', 'View stores nearby');
			})
		});
	});
	it('The button should change it text when pressed', () => {
		cy.get(dt('banner-container')).then(($banner) => {
			cy.wrap($banner).get('button[type=button]').then(($button) => {
				cy.wrap($button)
					.click()
					.should('have.text', 'Loading...');
			})
		});
	});
})