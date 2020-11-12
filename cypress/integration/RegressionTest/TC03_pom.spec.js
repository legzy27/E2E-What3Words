import searchLocation from '../pageObjects/search'


describe('Search Location', function(){
    const search  = new searchLocation()
    it('Location Based Search', function(){
        cy.visit('https://what3words.com/daring.lion.race')
        cy.get('[data-testid=CookieNotice-Close]').click()
        search.searchLocation('#search-popover').type('Bromley{enter}').type('{downarrow}').click();
    })
})
