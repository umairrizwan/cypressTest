// <reference types="Cypress" />

const { expect } = require("chai");
const { describe } = require("mocha");
//mport { UserService } from "./getUserConsumer";


describe("Testing APIs", function () {

    beforeEach("Create Session", function () {
        cy.createSession("umair", Cypress.env("login"), Cypress.env("password"))
    })

    it.skip("GET", function () {

        // cy.request({
        //     method: "POST",
        //     url: "https://favqs.com/api/session",
        //     headers: {
        //         "Authorization": `Token token="4f060d2d1797adb33b32ec3b92befdab"`
        //     },
        //     body: {
        //         "user": {
        //             "login": "umair.rizwan@hotmail.com",
        //             "password": "7ebece7c798"
        //         }
        //     }
        // }).then((response) => {
        //     cy.log(response);
        // })
        cy.request({
            method: "GET",
            url: "https://favqs.com/users/umair",
            failOnStatusCode: false
        }).then((response) => {
            cy.log(response);
        })

    })
})