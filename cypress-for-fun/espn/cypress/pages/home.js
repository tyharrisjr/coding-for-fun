export default class Home {
  siteLogo() {
    return cy.find('h2.logo-header a');
  }
}
