import loc from './locators'
import 'cypress-iframe'
import constants from './constants'

Cypress.Commands.add('goToPricesAndDeadlinesPage', () => {
    cy.get(loc.BUTTONS.CloseCookie).click()
    cy.get(loc.MENU.NationalPricesAndDeadlinesSimulator).click({force: true})

})

Cypress.Commands.add('IDontKnowTheZipCode', () => {
    cy.get(loc.BUTTONS.IDontKnowTheZipCode).click()

})

Cypress.Commands.add('SearchZipCode', (cep) => {
    cy.iframe(loc.IFRAMES.cboxIFrame).find(loc.INPUTS.ZipCodeAddress).clear().type(cep)
    cy.iframe(loc.IFRAMES.cboxIFrame).find(loc.BUTTONS.Search).click()

})

/*Cypress.Commands.add('CloseModalZipCode', () => {
    cy.get(loc.BUTTONS.CloseModalZipCode).click({force: true})

})*/

Cypress.Commands.add('OriginZipCode', (cep) => {
    cy.get(loc.INPUTS.OriginZipCode).clear().type(cep)

})

Cypress.Commands.add('DestinationZipCode', (cep) => {
    cy.get(loc.INPUTS.DestinationZipCode).clear().type(cep)

})

Cypress.Commands.add('ServiceType', (servico) => {
    cy.get(loc.SELECTS.ServiceType).select(servico)

})

Cypress.Commands.add('BoxFormat', () => {
    cy.get(loc.SELECTS.BoxFormat).click()

})

Cypress.Commands.add('TypeOfPackaging', (embalagem) => {
    cy.get(loc.SELECTS.TypeOfPackaging).select(embalagem)

})

Cypress.Commands.add('SelectTypeBox', () => {
    cy.get(loc.LABELS.BoxName).should('contain', constants.TEXTS.BoxName)
    cy.get(loc.BUTTONS.TypeBox).click()

})

Cypress.Commands.add('EstimatedWeight', (peso) => {
    cy.get(loc.SELECTS.EstimatedWeight).select(peso)

})

Cypress.Commands.add('Calculate', (peso) => {
    cy.get(loc.BUTTONS.Calculate).click()

})

Cypress.Commands.add('ValidateAddressesResultList', (addresses) => {
    addresses.forEach(address => {
        cy.iframe(loc.IFRAMES.cboxIFrame).find(loc.TABLES.DNECResult).should('contain', address.name)
        cy.iframe(loc.IFRAMES.cboxIFrame).find(loc.TABLES.DNECResult).should('contain', address.zipCode)
    });
})


/*Cypress.Commands.add('ValidateTotalValue', () => {
    
    var valorServico = 0
    var valorEmbalagem = 0

    cy.get('body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content > div.ctrlcontent > table > tbody > tr:nth-child(4) > td').invoke('text').then((value) => {
        valorServico = value
    })
    cy.get('body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content > div.ctrlcontent > table > tbody > tr:nth-child(5) > td').invoke('text').then((value) => {
        valorEmbalagem = value
    })

    var valorTotal = valorServico + valorEmbalagem

    cy.get('body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content > div.ctrlcontent > table > tfoot > tr > td').should('have.value', valorTotal)

})*/
