/// <reference types="cypress" />

describe('Entire App Flow', () => {
  it('should contain the correct app flow if user enters the information correctly', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Welcome to Bank of Trayt').should('be.visible');
    cy.contains('Initiate a new Direct Deposit to earn 5% for 36 months!').should('be.visible');

    cy.get('a.blue-button').contains('Learn More').click();

    cy.url().should('include', '/enrollment');

    const inputLabels = ['Account Number:', 'Routing Number:', 'Deposit Amount:'];

    inputLabels.forEach(label => {
      cy.contains('label', label) // Find the label element
        .siblings('input') // Find the sibling input element
        .should('exist'); // Assert that the input element exists
    });

    cy.contains('label', 'Frequency')
      .siblings('select')
      .should('exist');

    // Fill in the enrollment form with valid inputs
    cy.get('#accountNumber').type('12345678');
    cy.get('#routingNumber').type('123456789');
    cy.get('#depositAmount').type('1000');
    cy.get('#frequency').select('Once per month');

    cy.get('input.blue-button[type="submit"][role="button"]').should('exist');

    // Submit the form
    cy.get('form').submit();
    cy.url().should('include', '/calculator');
    cy.get('.react-datepicker').should('exist');

    cy.get('.interest-amount').contains('$0');

    // select next month
    cy.get('button.react-datepicker__navigation--next').click();
    // select day 18
    cy.get('.react-datepicker__day--018').click();

    function getDateConfirmationText() {
      cy.get('.react-datepicker__current-month').invoke('text').then(selectedMonthYear => {
        cy.get('.react-datepicker__day--selected').invoke('text').then(selectedDate => {
            const monthYear = selectedMonthYear.split(' ');
            const formattedCalendarDate = `${monthYear[0]} ${selectedDate}, ${monthYear[1]}`;
            cy.contains(`Total interest to be earned on ${formattedCalendarDate}`)
          })
    })}

    getDateConfirmationText();

    cy.get('.interest-amount').contains('$');
  })

  
})



