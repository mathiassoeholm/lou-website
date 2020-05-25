import faker from "faker";

describe("contact-page", () => {
  function getFakeEntry() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      subject: faker.lorem.words(),
      message: faker.lorem.words(),
    };
  }

  it("can submit", () => {
    cy.visit("/");
    cy.findByTestId("nav-link-to-/contact").click();

    const fakeEntry = getFakeEntry();

    cy.get("#name").type(fakeEntry.name);
    cy.get("#email").type(fakeEntry.email);
    cy.get("#subject").type(fakeEntry.subject);
    cy.get("#message").type(fakeEntry.message);
    cy.get('[type="submit"]').click();

    cy.findByTestId("thank-you-text");
  });

  it("should show an error message if the request fails", () => {
    cy.server();
    cy.route(`${Cypress.config().baseUrl}.netlify/funtions/contact-submit`, {});

    const fakeEntry = getFakeEntry();

    cy.visit("/contact");
    cy.findByTestId("nav-link-to-/contact").click();
    cy.get("#name").type(fakeEntry.name);
    cy.get("#email").type(fakeEntry.email);
    cy.get("#subject").type(fakeEntry.subject);
    cy.get("#message").type(fakeEntry.message);
    cy.get('[type="submit"]').click();

    cy.findByTestId("error-text");
  });
});
