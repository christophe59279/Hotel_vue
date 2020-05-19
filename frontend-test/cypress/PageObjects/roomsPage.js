/// <reference types="cypress"/>


const pageURL='http://localhost:3000/rooms'
const h2='h2'

const backBtn=':nth-child(3) .btn'
const textH2='Rooms'
const createRoomBtn='.blue'

const threeDotsMenu=':nth-child(3) > .action'
const deletBtn='.menu :nth-child(2)'

const logoutBtn='.user .btn'


function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
}

function backToOverview(cy){
    cy.get(backBtn).click()
}

function createRoom(cy){
    cy.get(createRoomBtn).click()
}

function deleteRoom(cy){
    cy.get(threeDotsMenu).click()
    cy.get(deletBtn).click()
}


module.exports={
    assertRightPage,
    backToOverview,
    createRoom,
    deleteRoom,
    pageURL

}