context('Countdown', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
    it('happy path should succeed', () => {
        cy.get('input[id*="seconds"]')
            .type(2).should('have.value', '2');
        cy.get('button[class*="button-start"]').click();
        cy.wait(2000);
        cy.get('div[id*="second-display"]').should('have.text', '0');
        cy.get('button[class*="button-clear"]').click();
        cy.get('input[id*="seconds"]').should('have.attr', 'placeholder', '00');
        cy.get('input[id*="seconds"]').should('have.value', '');
    });
    it('should show correct buttons', () => {
        cy.get('button[class*="button-start"]').should('exist');
        cy.get('button[class*="button-clear"]').should('exist');
        cy.get('button[class*="button-pause"]').should('not.exist');

        cy.get('input[id*="seconds"]')
            .type(3).should('have.value', '3');
        cy.get('button[class*="button-start"]').click();

        cy.get('button[class*="button-start"]').should('not.exist');
        cy.get('button[class*="button-clear"]').should('exist');
        cy.get('button[class*="button-pause"]').should('exist');

        cy.wait(3000);

        cy.get('button[class*="button-start"]').should('not.exist');
        cy.get('button[class*="button-clear"]').should('exist');
        cy.get('button[class*="button-pause"]').should('not.exist');

        cy.get('button[class*="button-clear"]').click();

        cy.get('button[class*="button-start"]').should('exist');
        cy.get('button[class*="button-clear"]').should('exist');
        cy.get('button[class*="button-pause"]').should('not.exist');
    });
});