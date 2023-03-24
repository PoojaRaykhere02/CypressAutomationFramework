///<reference types ="Cypress"/>

import Base_Page from "./Base_Page";

class ContactUs_Page extends Base_Page {

  firstName= "[name='first_name']"
  lastName=  "[name='last_name']"
  email_address= "[name='email']"
  
  elements = {
    comment_textField: () => cy.get('textarea[name="message"]'),
    submit_button: () => cy.get("[value='SUBMIT']"),
    submission_header_text: () => cy.xpath("//h1 | //body"),
    
  };
  navigateTo_ContactUs_page() {
    super.navigate("/Contact-Us/contactus.html");
  }

  clickOn_submit_button() {
    this.elements.submit_button().click();
  }

  clickOn_firstName(first_name) {
    cy.get(this.firstName).type(first_name);
  }

  clickOn_lastName(last_name) {
    cy.get(this.lastName).type(last_name);
  }

  type_emailAddress(email_address) {
    cy.get(this.email_address).type(email_address);
  }

  type_comments(comment) {
    this.elements.comment_textField().type(comment);
  }

  validate_submission_header(expectedText) {
    this.elements.submission_header_text().contains(expectedText);
  }
}

export default ContactUs_Page;
