/// <reference types="cypress"/>


const textTitle='Testers Hotel'
const pageURL='http://localhost:3000/'

const h1='h1'
const h2='h2'
const textH1='Tester Hotel'
const textH2='Tester Hotel Overview'
const textWelcome='Welcome tester01!' 

const welcomeUserName='.username'
const logoutBtn='.user .btn'


function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
cy.get(welcomeUserName).should('contain', textWelcome)
}

function validLogout(cy){
    cy.get(logoutBtn).click()
}

module.exports={
    validLogout,
    assertRightPage,
    pageURL

}