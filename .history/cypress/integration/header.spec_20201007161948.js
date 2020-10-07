context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Header", () => {
    it("shows app name", () => {
      cy.get("header").findByText("Flash Cards").should("exist");
    });
    it('links to home page when app name clicked', () => {
      cy.get('header').findByText('Flash Cards').click();
      cy.url().should('eq', 'http://localhost:3000');
    })
  });
});
