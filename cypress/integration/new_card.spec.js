context('Add new card', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/new');
    });

    it('shows new card form', () => {
        cy.findByText('Add New Card');
    });

    it('submits new card with all fields filled in', () => {
        cy.findByText('German').click({ force: true }).type('die Sonne');
        cy.findByText('English').click({ force: true }).type('the sun');
        cy.findByText('Save').click();

        cy.findByText('New card saved');
    });

    it('displays validation messages on submission when mandatory fields are empty', () => {
        cy.findByText('Save').click();
        cy.findByText('German')
            .click({ force: true })
            .findByText('Mandatory field!');
        cy.findByText('English')
            .click({ force: true })
            .findByText('Mandatory field!');

        cy.findByText('New card saved').should('be', null);
    });
});
