import faker from "faker";

describe("contact-page", () => {
  it("can submit", () => {
    cy.visit("/");
    cy.findByTestId("nav-link-to-/contact").click();
    cy.get("#name").type(faker.name.findName());
    cy.get("#email").type(faker.internet.email());
    cy.get("#subject").type(faker.lorem.words());
    cy.get("#message").type(faker.lorem.paragraphs());
    cy.get('[type="submit"]').click();

    cy.findByTestId("thank-you-text");
  });
});
