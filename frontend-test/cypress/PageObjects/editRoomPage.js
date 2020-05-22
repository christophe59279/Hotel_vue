/// <reference types="cypress"/>

const pageURL='http://localhost:3000/room/3'
const h2='h2'
const textH2='Room: 3'

const PriceField='.field:nth-child(7) input'

const saveRoomBtn='.blue' 

function assertRightPage(cy){
    cy.get(h2).should('contain',textH2)
    cy.url().should('eq',pageURL)
}

function editPrice(cy){
    cy.get(PriceField).clear().type('3000').should('have.value','3000')
}

function saveRoom(cy){
    cy.get(saveRoomBtn).click()
}

module.exports={
    assertRightPage,
    editPrice,
    saveRoom,
    pageURL

}