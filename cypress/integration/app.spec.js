import hexToRgb from '../fixtures/Utils/HexToRGB';

const host = 'http://localhost:3000';

describe('Home Page', () => {
	beforeEach(() => {cy.visit(host);});
	it('Should have the correct linear background', () => {
		cy.get('body').should('have.css', 'background-image', 'linear-gradient(90deg, rgb(240, 113, 119), rgb(144, 100, 254))');
	});
	it('Should contain an h1 with the correct text', () => {
		cy.contains('h1', 'Next Stores');
	});
	it('Should have an subtitle with the correct text',()=>{
		cy.contains('h2','Find your perfect coffe!');
	});
	it('Should have a button with the correct text',()=>{
		cy.get('button').should('have.css', 'background-color', hexToRgb('#4745e5'));
		cy.contains('button[type=button]','View stores nearby');
	});
	it('The button should change it text when pressed', () => {
		cy.contains('button[type=button]','View stores nearby').click();
		cy.contains('button[type=button]','Loading...');
	});
});