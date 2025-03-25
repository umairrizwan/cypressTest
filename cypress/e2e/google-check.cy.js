// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");
describe("Testing UI", function () {
  beforeEach(() => {});

  it("testing session", function () {
    cy.visit("http://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("#APjFqb").type("Amazon");
    cy.get("div[role='option']").each(function ($ele, index, $list) {
      if ($ele.text().includes("amazon malta")) {
        cy.wrap($ele).click();
      } else {
        cy.log($ele.text());
      }
    });
  });
});
