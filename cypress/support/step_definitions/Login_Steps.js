const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Page from "../page_objects/Login_Page";

const loginPage = new Login_Page;

let stub;

When(`I type a {string} and {string}`, function  (username, password) {
  loginPage.type_username(username);
  loginPage.type_password(password);
});

When(`Click on the login button`, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  loginPage.clickOn_login_button();
});

Then(`I should be presented with an alert box which contains text {string}`,
   (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
  }
);
