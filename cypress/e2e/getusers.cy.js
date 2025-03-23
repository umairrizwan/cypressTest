// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");
import { UserService } from "./getUserConsumer";


describe("Testing APIs", function () {
    it.skip("GET", function () {

        const expectedEmail = "lindsay.ferguson@reqres.in";
        // cy.request(
        //     'GET', 'https://reqres.in/api/users?page=2'
        // ).then((response) => {
        //     cy.log(response)
        //     cy.wrap(response).its("status").should("be.equal", 200)
        //     cy.wrap(response).its("body.data[1].email").should("be.equal", expectedEmail)
        // })

        UserService().GetUser({}).then((response) => {
            cy.log(response)
            cy.wrap(response).its("status").should("be.equal", 200)
            cy.wrap(response).its("body.data[1].email").should("be.equal", expectedEmail)
        })
    })
})