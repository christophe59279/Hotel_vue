/// <reference types="cypress"/>

import * as startPage from "../../PageObjects/startPage"
import * as overviewPage from "../../PageObjects/overviewPage"
import * as roomPage from "../../PageObjects/roomsPage"
import * as clientPage from "../../PageObjects/clientsPage"
import * as billPage from "../../PageObjects/billsPage"
import * as reservationPage from "../../PageObjects/reservationsPage"
import * as createRoom from "../../PageObjects/createRoomPage"

beforeEach(function(){
    cy.visit(startPage.pageURL)
})

describe('Regression',function(){
    
it('valid login och logout',function(){
    startPage.assertRightPage(cy)
    startPage.validLogin(cy)
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
    
    overviewPage.validLogout(cy)
 })

 it('create a room', function(){
    startPage.validLogin(cy)
    overviewPage.viewRoomsClick(cy)
    roomPage.createRoom(cy)
    
    createRoom.assertRightPage(cy)
    createRoom.selectCategory(cy)
    createRoom.selectNumber(cy)
    createRoom.selectFloor(cy)
    createRoom.selectavailable(cy)
    createRoom.selectPrice(cy)
    createRoom.selectFeature(cy)
    createRoom.SaveRoom(cy)
    cy.get('.container:nth-child(2)').should('contain','Floor 2').and('contain','Room 211')

 })

})