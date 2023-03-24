///<reference types= "cypress" />

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ContactUs_Page } = require("../page_objects/ContactUs_Page");

const contactusPage = new ContactUs_Page;

When(`I click on the submit button`, ()=>{
    contactusPage.clickOn_submit_button();
})

When(`I type a first name {word} and a last name {string}`,(first_name, last_name) =>{
    contactusPage.clickOn_firstName(first_name);
    contactusPage.clickOn_lastName(last_name);
})

When(`I type a {string} and a comment {string}`,(email_address, comment) =>{
    contactusPage.type_emailAddress(email_address);
    contactusPage.type_comments(comment);
})

Then(`I should be presented with header text {string}`, (message)=>{
    contactusPage.validate_submission_header(message);
})
