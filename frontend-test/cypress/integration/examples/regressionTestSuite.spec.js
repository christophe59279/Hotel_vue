/// <reference types="cypress"/>


describe('Regression',function(){
    it('valid login',function(){
    cy.visit('http://localhost:3000')
    cy.url().should('eq','http://localhost:3000/login')
    cy.get('h2').should('contain','Login')
    cy.get("[type='text']").type('tester01').should('have.value','tester01')
    cy.get("[type='password']").type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c').should('have.value','GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.blue').click()
    cy.get('.username').should('contain','Welcome tester01!')
    cy.get('.user > .btn').should('be.visible').click()
    cy.get('h2').should('contain','Login')
    cy.get('.router-link-active').should('contain', 'Tester Hotel')
    })

})