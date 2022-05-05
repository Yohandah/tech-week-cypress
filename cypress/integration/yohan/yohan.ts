import { When, Then, And, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When(/l'utilisateur accède à l'application/, () => {
    cy.visit('/');
});

And(/^il appuie sur '(.*?)'$/, (name: string) => {
    cy.contains(name).click();
});

And(/^il change le nom par '(.*?)'$/, (name: string) => {
    cy.get('[data-test="hero-name-input"]').clear().type(name);
});

And(/enregistre/, (name: string) => {
    cy.contains('save').click();
});

Then(/la liste des heros est la suivante/, (herosTable: DataTable) => {
    cy.get('[data-test="hero-link"]').each((e, i) => {
        console.log(herosTable.hashes()[i]);
        cy.wrap(e).should('have.text', herosTable.hashes()[i].heros);
    });
});

And(/le heros '(.*?)' n'est plus présent dans la liste/, (name: string) => {
    cy.get('[data-test="hero-link"]').each((e, i) => {
        cy.wrap(e).should('not.have.text', name);
    });
});