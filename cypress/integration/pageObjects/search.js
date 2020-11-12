class search {
    searchLocation (){
        return  cy.get('#search-popover').type('{enter}').type('{downarrow}').click();
    }
}


export default search