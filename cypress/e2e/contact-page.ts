describe("contact-page", () => {
  it("can submit", () => {
    cy.visit("/");
    cy.findByTestId("nav-link-to-/contact").click();
    cy.get("#name").type("Bob");
    cy.get("#email").type("bob@mail.com");
    cy.get("#subject").type("Cypress test");
    cy.get("#message").type("This is a message from Cypress");
    cy.get('[type="submit"]').click();

    cy.findByTestId("thank-you-text");
  });
});
