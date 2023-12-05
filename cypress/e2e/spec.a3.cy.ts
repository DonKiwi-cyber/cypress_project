describe('A3', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('#openA3').click();
    });
  
    it('has the correct title', () => {
        cy.title().should('equal', 'E2eTests');
    });
  
    it('has to show the modal window', () => {
        cy.get('.a3Container').should('exist');
    });
  
    it('has to contain the divs', () => {
        cy.get('.a3Container').should('exist');
        cy.get('.a3Container')
        .find('.linearRegression').should('exist');
        cy.get('.a3Container')
        .find('.correlation').should('exist');
    })
  
    it('"linearRegression" should not be empty', ()=> {
        cy.get('.a3Container').should('exist');
        cy.get('#LRData1')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#LRData2')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#LRData3')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#LRData4')
            .invoke('text')
            .should('not.be.empty');
    })

    it('"correlation" should not be empty', ()=> {
        cy.get('.a3Container').should('exist');
        cy.get('#correlationData1')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#correlationData2')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#correlationData3')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#correlationData4')
            .invoke('text')
            .should('not.be.empty');
    })
  
    it('has to close the modal', () => {
        cy.get('.a3Container').should('exist');
        cy.get('#closeA3').should('exist').click();
        cy.wait(1000);
        cy.get('.a3Container').should('not.exist');
    })
  });
  