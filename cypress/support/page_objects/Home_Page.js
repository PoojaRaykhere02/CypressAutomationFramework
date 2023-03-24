///<reference types= "Cypress"/>

import Base_Page from "./Base_page";

class Home_Page extends Base_Page{
    navigateToHomePage(){
        super.navigate("");
    }

    clickOn_ContactUs_Button(){
        cy.clickAndOpenLinkInSameTab("#contact-us");
    }

    clickOn_Login_Button(){
        cy.clickAndOpenLinkInSameTab("#login-portal");
    }
}

export default Home_Page;