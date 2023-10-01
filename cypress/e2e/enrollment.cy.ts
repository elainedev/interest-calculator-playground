/// <reference types="cypress" />

describe('Enrollment', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/enrollment');
  })

  it('should missing input', () => {
    // submit form without any input
    cy.get('form').submit();
    cy.contains('Account number is required.').should('be.visible');
    cy.contains('Routing number is required.').should('be.visible');
    cy.contains('Deposit Amount is required.').should('be.visible');
  })

  describe('account number is the correct length', () => {
    it('should account number fewer than 8 digits', () => {
      cy.get('#accountNumber').type('1234567');
      cy.get('form').submit();
      cy.contains('Account Number must be 8 or more digits.').should('be.visible');
    })

    it('should account number greater than 17 digits', () => {
      cy.get('#accountNumber').type('123456789012345678');
      cy.get('form').submit();
      cy.contains('Account Number must be fewer than 17 digits.').should('be.visible');
    })
  })

  describe('routing number validation', () => {
    it('should routing number fewer than 9 digits', () => {
      cy.get('#routingNumber').type('12345678');
      cy.get('form').submit();
      cy.contains('Missing numbers. Routing Number must be 9 digits.');
    })

    it('should routing number greater than 9 digits', () => {
      cy.get('#routingNumber').type('1234567890');
      cy.get('form').submit();
      cy.contains('Excessive numbers. Routing Number must be 9 digits.').should('be.visible');
    })

    it('routing number should start with a valid prefix', () => {
      const suffix = '3456789'
      cy.get('#routingNumber').type(`13${suffix}`);
      cy.get('form').submit();
      cy.contains('Invalid routing number.').should('be.visible');

      cy.get('#routingNumber').clear().type(`21${suffix}`);
      cy.contains('Invalid routing number.').should('not.exist');

      cy.get('#routingNumber').clear().type(`33${suffix}`);
      cy.contains('Invalid routing number.').should('be.visible');

      cy.get('#routingNumber').clear().type(`61${suffix}`);
      cy.contains('Invalid routing number.').should('not.exist');

      cy.get('#routingNumber').clear().type(`73${suffix}`);
      cy.contains('Invalid routing number.').should('be.visible');

      cy.get('#routingNumber').clear().type(`80${suffix}`);
      cy.contains('Invalid routing number.').should('not.exist');

    })
  })

  describe("deposit amount formatting", () => {
    it('deposit field should have the correct format in American dollars', () => {
      cy.get('#depositAmount').type('10000000000.00');
      cy.get('#depositAmount').should('contain.value', '$ 10,000,000,000.00').should('be.visible');
    })
  })

  describe("frequency select dropdown", () => {
    it('should have two options for depositing once or twice a month', () => {
      cy.get('#frequency').find('option').should('have.length', 2);
  
      cy.get('#frequency').contains('Once per month').then(option => {
        expect(Number(option.val())).to.equal(1);
      });

      cy.get('#frequency').contains('Twice per month').then(option => {
        expect(Number(option.val())).to.equal(2);
      });
    });
  })
})