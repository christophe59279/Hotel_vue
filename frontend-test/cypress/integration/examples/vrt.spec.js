/// <reference types="cypress"/>

import * as startPage from "../../PageObjects/startPage"
import * as overviewPage from "../../PageObjects/overviewPage"
import * as roomsPage from "../../PageObjects/roomsPage"
import * as clientPage from "../../PageObjects/clientsPage"
import * as billPage from "../../PageObjects/billsPage"
import * as reservationPage from "../../PageObjects/reservationsPage"
import * as createRoom from "../../PageObjects/createRoomPage"
import * as editRoom from "../../PageObjects/editRoomPage"


describe('VRT',function(){
    
it('visit',function(){
    cy.visit(startPage.pageURL)
    cy.percySnapshot('login-page')
})

it('login', function(){
    startPage.validLogin(cy)
    cy.wait(500)
    cy.percySnapshot('overview-page')
})

it('view clients', function(){
    overviewPage.viewClientsClick(cy)
    cy.percySnapshot('clients-page')
})

it('create client', function(){
    clientPage.createClient(cy)
    cy.percySnapshot('create-new-client-page')
    cy.get('.actions .btn:nth-child(1)').click()
    clientPage.backToOverview(cy)
})

it('view reservations', function(){
    overviewPage.viewReservationClick(cy)
    cy.percySnapshot('reservations-page')
    reservationPage.validLogout(cy)  
})

})
