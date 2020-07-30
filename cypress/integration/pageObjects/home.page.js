//const Helper = require('@/../../Helpers/helper.js');

export default {
    renderTheChallenge: renderTheChallenge,
};

let HomePageControls = {
    RenderChallengeButton: '#home > div > div > button',
    // FindEventsLink : '#nav_collapse > ul > li:nth-child(1) > li > a',
    // SignInLink : '#nav_collapse > ul > li:nth-child(2) > li > a',
    // MyReservationsLink : '#nav_collapse > ul > li:nth-child(2) > li > a',
    // UserNameLink : '#nav_collapse > ul > li:nth-child(3) > li > a',
    // RegisterLink : '#nav_collapse > ul > li:nth-child(3) > li > a',
    // SignOutLink : '#nav_collapse > ul > li:nth-child(4) > a',
    // EmailAddressTextBox : 'input[placeholder="email address"]',
    // PasswordTextBox : 'input[placeholder="password"]',
    // SignInButton : 'button[type="submit"]',
    // LocationResultsContainer : '.pac-container',
    // LocationResultItem : '.pac-item',
    // SearchTextBox: 'input[placeholder="Enter a location"]'
    
};

function renderTheChallenge(){
    cy.get(HomePageControls.RenderChallengeButton).should('be.visible')
    cy.get(HomePageControls.RenderChallengeButton).click();
}