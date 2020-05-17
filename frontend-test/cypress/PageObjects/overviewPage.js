/// <reference types="cypress"/>


const pageURL='http://localhost:3000/'

const h2='h2'
const textH2='Tester Hotel Overview'
const textWelcome='Welcome tester01!' 

const welcomeUserName='.username'
const logoutBtn='.user .btn'

const viewRoomsBtn='.block:nth-child(1) .btn'
const viewClientsBtn='.block:nth-child(2) .btn'
const viewBillsBtn='.block:nth-child(3) .btn'
const viewReservationsBtn='.block:nth-child(4) .btn'

function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
cy.get(welcomeUserName).should('contain', textWelcome)
}

function validLogout(cy){
    cy.get(logoutBtn).click()
}

function viewRoomsClick(cy){
    cy.get(viewRoomsBtn).click()
}

function viewClientsClick(cy){
    cy.get(viewClientsBtn).click()
}

function viewBillsClick(cy){
    cy.get(viewBillsBtn).click()
}

function viewReservationClick(cy){
    cy.get(viewReservationsBtn).click()
}

module.exports={
    validLogout,
    assertRightPage,
    viewRoomsClick,
    viewClientsClick,
    viewBillsClick,
    viewReservationClick,
    pageURL

}