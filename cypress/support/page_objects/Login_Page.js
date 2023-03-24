///<reference types ="Cypress"/>

import Base_Page from "./Base_Page";

class Login_Page extends Base_Page {
  navigateTo_login_page() {
    super.navigate("/Login-Portal/index.html");
  }

  type_username(username) {
    cy.get('#text').type(username);
  }

  type_password(password) {
    cy.get('#password').type(password);
  }

  clickOn_login_button() {
    cy.get('#login-button').click();
  }
}

export default Login_Page;
