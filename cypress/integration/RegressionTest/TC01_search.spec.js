describe('Search Location', function(){
    it('Location Based Search', function(){
        cy.visit('https://what3words.com/daring.lion.race')
        cy.get('[data-testid=CookieNotice-Close]').click()
        cy.get('#search-popover').type('Bromley{enter}').type('{downarrow}').click();
    })
})



describe('Search Address', function(){
    it('Location Search With Door Number ', function(){
        cy.visit('https://what3words.com/daring.lion.race')
        cy.get('[data-testid=CookieNotice-Close]').click()
        cy.get('#search-popover').type('78 Marner Point 1 Jefferson Plaza {enter}').type('{downarrow}').click();
    })
})

