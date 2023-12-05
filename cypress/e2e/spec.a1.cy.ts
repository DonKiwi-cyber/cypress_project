describe('A1', () => {

  beforeEach(() => {
      cy.visit('/');
      cy.get('#openA1').click();
  });

  it('has the correct title', () => {
      cy.title().should('equal', 'E2eTests');
  });

  it('has to show the modal window', () => {
      cy.get('.a1Container').should('exist');
  });

  it('has to contain the divs', () => {
      cy.get('.a1Container').should('exist');
      cy.get('.a1Container')
          .find('.mean').should('exist');
      cy.get('.a1Container')
          .find('.stddev').should('exist');
  })

  it('has not be empty', ()=> {
        cy.get('.a1Container').should('exist');
        cy.get('#meanData')
            .invoke('text')
            .should('not.be.empty');
        cy.get('#stddevData')
            .invoke('text')
            .should('not.be.empty');
    })

    it('has to close the modal', () => {
        cy.get('.a1Container').should('exist');
        cy.get('#closeA1').should('exist').click();
        cy.wait(1000);
        cy.get('.a1Container').should('not.exist');
    })
});