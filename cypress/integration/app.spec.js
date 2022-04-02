import dt from '../fixtures/Utils/dataTest';
import hexToRgb from '../fixtures/Utils/HexToRGB';

describe('Home Page', () => {
	beforeEach(() => {cy.visit('/');});
	it('Should have the correct linear background', () => {
		cy.get('body').should('have.css', 'background-image', 'linear-gradient(90deg, rgb(240, 113, 119), rgb(144, 100, 254))');
	});
});

describe('Banner', () => {
	beforeEach(() => {cy.visit('/');});
	it('Should have an h1 with the correct text', () => {
		cy.get(dt('banner-container')).then(($banner) => {
			cy.wrap($banner).find('h1').should('have.text', 'Next Stores');
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
					.should('have.css', 'background-color', hexToRgb('#4745e5'))
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