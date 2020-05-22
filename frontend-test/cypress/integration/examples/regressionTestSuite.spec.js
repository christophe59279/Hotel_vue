/// <reference types="cypress"/>

import * as startPage from "../../PageObjects/startPage"
import * as overviewPage from "../../PageObjects/overviewPage"
import * as roomsPage from "../../PageObjects/roomsPage"
import * as clientPage from "../../PageObjects/clientsPage"
import * as billPage from "../../PageObjects/billsPage"
import * as reservationPage from "../../PageObjects/reservationsPage"
import * as createRoom from "../../PageObjects/createRoomPage"
import * as editRoom from "../../PageObjects/editRoomPage"

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
    roomsPage.assertRightPage(cy)
    roomsPage.backToOverview(cy)
    
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
    roomsPage.createRoom(cy)
    
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

 it('edit a room', function(){
   startPage.validLogin(cy)
   overviewPage.viewRoomsClick(cy)
   overviewPage.assertRightPrice(2500)
   roomsPage.editRoom(cy)
   editRoom.assertRightPage(cy)
   editRoom.editPrice(cy)
   editRoom.saveRoom(cy)
   overviewPage.assertRightPrice(3000)
     
 })

 it('delete a room', function(){
   startPage.validLogin(cy)
   overviewPage.viewRoomsClick(cy)
   roomsPage.assertLenghtOfRooms(3)
   roomsPage.deleteRoom(cy)
   roomsPage.assertLenghtOfRooms(2)
   roomsPage.validlogout(cy)
})
})