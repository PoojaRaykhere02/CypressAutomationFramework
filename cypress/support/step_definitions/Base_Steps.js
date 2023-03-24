///<reference types="cypress" />

const { Before, After, Then } = require("@badeball/cypress-cucumber-preprocessor");

Before(()=>{
    cy.log("Executes before each scenario/test")
    cy.clearLocalStorage();
})

After(()=>{
    cy.log("Executes after each scenario/test")
})

Then("I wait for {int} seconds", (seconds)=>{
    cy.wait(seconds*1000);
})