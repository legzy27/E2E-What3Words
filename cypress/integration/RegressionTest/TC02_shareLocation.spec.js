describe('Share Tab feature', function(){
    it('Check Share Tab feature ', function(){
        cy.visit('https://what3words.com/daring.lion.race')
        cy.get('[data-testid=CookieNotice-Close]').click()
        cy.get('#search-popover').type('Bromley{enter}').type('{downarrow}').click();
        cy.wait(500)
        cy.contains('Share').click({force: true})
    
})


})