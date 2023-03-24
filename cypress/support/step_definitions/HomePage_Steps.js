///<reference types= "cypress" />

import Base_Page from "../page_objects/Base_page";
import Home_Page from "../page_objects/Home_Page";

const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");

const homePage = new Home_Page();

Given(`I navigate to the webdriveruniversity homepage`,()=>{
    homePage.navigateToHomePage();
})

When(`I click on the contact us button`, ()=>{
    homePage.clickOn_ContactUs_Button();
})

When("I click on the login portal button", ()=> {
    homePage.clickOn_Login_Button();
});


