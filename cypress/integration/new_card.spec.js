context("Add new card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/new");
  });

  it('shows new card form', () => {
      cy.findByText('Add New Card');
  });

  it('submits new card with all fields filled in', ()=>{
      cy.findByText('German').type('die Sonne');
      cy.findByText('English').type('the sun');
      cy.findByText('Save').click();

      cy.findByText('New card saved');
  })
});
