/// <reference types="cypress"/>


const pageURL='http://localhost:3000/reservations'
const h2='h2'

const backBtn=':nth-child(3) .btn'
const textH2='Reservations'
const createRoomBtn='.blue' 

const logoutBtn='.user .btn'


function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
}

function backToOverview(cy){
    cy.get(backBtn).click()
}


module.exports={
    assertRightPage,
    backToOverview,
    pageURL

}