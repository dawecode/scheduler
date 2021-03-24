describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navitage to tuesday", () => {
    cy.visit("/");

    cy.contains("[data-testid=day]","Tuesday")
    .click()
    .should("have.class","day-list__item--selected")
    
  })
});