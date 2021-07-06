describe("Testing our inputs and submit our form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/");
  });
  it("add test to inputs and submit form", function() {
    cy.get('input[name="name"]')
      .type("christian")
      .should("have.value", "christian");
    cy.get("input[name='email']")
      .type("email@email.com")
      .should("have.value", "email@email.com");

    cy.get(":nth-child(3) > input").type("password123");

    cy.get('[type="checkbox"]')
      .check()
      .should("be.checked");
    cy.get("button").click();
  });
});
