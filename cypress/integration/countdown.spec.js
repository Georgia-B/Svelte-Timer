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
});