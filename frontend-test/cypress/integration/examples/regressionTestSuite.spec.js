/// <reference types="cypress"/>

import * as startPage from "../../PageObjects/startPage"
import * as overviewPage from "../../PageObjects/overviewPage"
import * as roomPage from "../../PageObjects/roomsPage"
import * as clientPage from "../../PageObjects/clientsPage"
import * as billPage from "../../PageObjects/billsPage"
import * as reservationPage from "../../PageObjects/reservationsPage"

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

 it('view each object, assert and back', function(){
    startPage.validLogin(cy)
    overviewPage.viewRoomsClick(cy)
    roomPage.assertRightPage(cy)
    roomPage.backToOverview(cy)
    
    overviewPage.viewClientsClick(cy)
    clientPage.assertRightPage(cy)
    clientPage.backToOverview(cy)
    
    overviewPage.viewBillsClick(cy)
    billPage.assertRightPage(cy)
    billPage.backToOverview(cy)
    
    overviewPage.viewReservationClick(cy)
    reservationPage.assertRightPage(cy)
    reservationPage.backToOverview(cy)
   
 })

 

})