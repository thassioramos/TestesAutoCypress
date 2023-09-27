Cypress._.times(5, function() {
   
    it('Testar A Pagina Politica De Privacidade De Forma Independente',function (){
        cy.visit('./cypress/src/privacy.html')
        cy.get('title')
        cy.contains('CAC TAT - Política de privacidade')
         .should('be.visible')
        cy.contains('Talking About Testing')
        .should('be.visible')
    });


})





