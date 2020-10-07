context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Header", () => {
    it("shows app name", () => {
      cy.get("header").findByText("Flash Cards").should("exist");
    });
    it('links to home page when app name clicked', () => {
      cy.get('header').findByText('Flash Cards').get('a').click();
      cy.url().should('eq', 'http://localhost:3000/');
    })
  });
  it('links to add new card when clicked', () => {
    cy.get('header').findByText('+ New Card').get('a').click();
    cy.url().should('eq', 'http://localhost:3000/new');
  })
});
