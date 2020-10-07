context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Header", () => {
    it("shows app name", () => {
      cy.get("header").findByText("Flash Cards").should("exist");
    });
    it('')
  });
});
