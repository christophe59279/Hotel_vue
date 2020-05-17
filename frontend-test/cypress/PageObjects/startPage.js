/// <reference types="cypress"/>

const textTitle='Testers Hotel'
const pageURL='http://localhost:3000/login'

const h1='h1'
const h2='h2'
const textH1='Tester Hotel'
const textH2='Login'

const userNameField='[type=text]'
const PassWordField='[type=password]'
const userName1='tester01'
const passWord1='GteteqbQQgSr88SwNExUQv2ydb7xuf8c'
const loginBtn='.blue'

function assertRightPage(cy){
cy.get(h2).should('contain',textH2)
cy.url().should('eq',pageURL)
}

function validLogin(cy){
    cy.get(userNameField).type(userName1).should('have.value',userName1)
    cy.get(PassWordField).type(passWord1).should('have.value',passWord1)
    cy.get(loginBtn).click()
}

module.exports={
    validLogin,
    assertRightPage,
    pageURL

}





