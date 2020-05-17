/// <reference types="cypress"/>

import * as startPage from "../../PageObjects/startPage"
import * as overviewPage from "../../PageObjects/overviewPage"

beforeEach(function(){
    cy.visit(startPage.pageURL)
})

describe('Regression',function(){
    

    it('valid login och logout',function(){
        
        startPage.assertRightPage(cy)
        startPage.validLogin(cy)
        //cy.wait(1000)
        overviewPage.assertRightPage(cy)
        overviewPage.validLogout(cy)
        startPage.assertRightPage(cy)

    })

})