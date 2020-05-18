/// <reference types="cypress"/>


const pageURL='http://localhost:3000/room/new'
const h2='h2'
const textH2='New Room'

const categoryField='.field:nth-child(1) select'
const numberField='.field:nth-child(2) input'
const floorField='.field:nth-child(3) input'
const availableCheckbox='.field:nth-child(4) .checkbox'
const PriceField='.field:nth-child(5) input'
const featurefield='.field:nth-child(6) select'

const backBtn='.actions .btn:nth-child(1)'
const saveRoomBtn='.blue' 
const logoutBtn='.user .btn'


function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
}

function selectCategory(cy){
    cy.get(categoryField).select('Double').should('have.value','double')
}

function selectNumber(cy){
    cy.get(numberField).type('211').should('have.value','211')
}

function selectFloor(cy){
    cy.get(floorField).type('2').should('have.value','2')
}

function selectavailable(cy){
    cy.get(availableCheckbox).click()
}

function selectPrice(cy){
    cy.get(PriceField).type('2500').should('have.value','2500')
}

function selectFeature(cy){
    cy.get(featurefield).select('balcony')
    cy.get('.field:nth-child(6) select [value=balcony]').should('be.selected')
}

function backToRooms(cy){
    cy.get(backBtn).click()
}

function SaveRoom(cy){
    cy.get(saveRoomBtn).click()
}


module.exports={
    assertRightPage,
    backToRooms,
    SaveRoom,
    selectCategory,
    selectNumber,
    selectFloor,
    selectavailable,
    selectPrice,
    selectFeature,
    pageURL

}