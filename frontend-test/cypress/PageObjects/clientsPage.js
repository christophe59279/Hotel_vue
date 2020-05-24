/// <reference types="cypress"/>


const pageURL='http://localhost:3000/clients'
const h2='h2'

const backBtn=':nth-child(3) .btn'
const textH2='Clients'
const createClientBtn='.blue' 

const logoutBtn='.user .btn'


function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
}

function backToOverview(cy){
    cy.get(backBtn).click()
}

function createClient(cy){
    cy.get(createClientBtn).click()
}


module.exports={
    assertRightPage,
    backToOverview,
    createClient,
    pageURL

}