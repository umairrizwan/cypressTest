// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");
describe("Testing UI", function () {

    beforeEach(() => {
        cy.session('LoginSession', () => {
            // cy.visit('http://eaapp.somee.com/');
            // cy.get('#loginLink').click();
            // cy.get('#UserName').type('testerqaa');
            // cy.get('#Password').type('P@$$word7');
            // cy.get('.btn.btn-default').click();
            // cy.wait(3000)
        })
    })

    it("testing session", function () {

        cy.visit('http://eaapp.somee.com/Account/Login');
       // cy.get('#loginLink').click();
        cy.get('#UserName').type('testerqaa');
        cy.get('#Password').type('P@$$word7');
        cy.get('.btn.btn-default').click();
        //cy.visit('http://eaapp.somee.com/');
      //  cy.get(`a[href="javascript:document.getElementById('logoutForm').submit()"]`).click();
    })

    


})