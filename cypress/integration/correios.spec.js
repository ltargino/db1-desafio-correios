/// <reference types="cypress" />
import constants from '../support/constants'

context('Correios', () => {

    beforeEach(()=> {
        cy.visit('/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('Should return adress List when search by zip code', () => {
        
        cy.title()
            .should('contain', constants.TEXTS.HomePageTitle)
        cy.goToPricesAndDeadlinesPage()
            .title()
            .should('contain', constants.TEXTS.PricesAndDeadlinesPageTitle)

        cy.IDontKnowTheZipCode()
        cy.SearchZipCode('87014-010')
        cy.ValidateAddressesResultList(constants.ADDRESSES)

        //cy.FecharModalCep()

    })

    it('Compare values when calculate new service', () => {
        
        cy.title()
            .should('contain', constants.TEXTS.HomePageTitle)
        cy.goToPricesAndDeadlinesPage()
            .title()
            .should('contain', constants.TEXTS.PricesAndDeadlinesPageTitle)
         
        cy.OriginZipCode('87014-010')
        cy.DestinationZipCode('87240-000')
        cy.ServiceType('04510')
        cy.BoxFormat()
        cy.TypeOfPackaging('correiosEmbalagem1')
        cy.SelectTypeBox()
        cy.EstimatedWeight('2')
        cy.Calculate()
        
        //cy.ValidarValorTotal()

    })

})