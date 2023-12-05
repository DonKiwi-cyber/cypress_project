describe('A5', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('#openA5').click();
    });

    it('has the correct title', () => {
        cy.title().should('equal', 'E2eTests');
    });

    it('has to show the modal window', () => { 
        cy.get('.a5Container').should('exist');
    });

    it('has to cointain the main divs', () => {
        cy.get('.a5Container').should('exist');
        cy.get('.a5Container')
            .find('.form').should('exist');
        cy.get('.a5Container')
            .find('.result').should('exist');
    })

    it('"form" has to contain the inputs and the button', () => {
        cy.get('.form')
            .find('input')
            .should('exist');
        cy.get('.form')
            .find('button')
            .should('exist');
    })

    it('"result" has to contain the "result container"', () => {
        cy.get('.result')
            .find('.resultContainer')
            .should('exist');
    })

    it('the input "dof" should be disabled by default', () => {
        cy.get('.form')
            .find('#dofInput')
            .should('be.disabled')
    })

    it('should turn dof "enabled" when click the "t-student" radio', () => {
        cy.get('.form')
            .find('#TsRadio')
            .check();
        cy.get('.form')
            .find('#dofInput')
            .should('be.enabled')
    })

    it('should show "función" as "Simpson" and "error" as "aprobado"', () => {
        cy.get('#x0Input').type('0');
        cy.get('#x1Input').type('4');
        cy.get('#numSegInput').type('4');
        cy.get('#errorInput').type('0.001');
        cy.get('#2xRadio').check();
        cy.get('#process').click();
        cy.get('#typeSpan').invoke('text').should('include', 'Simpson');
        cy.get('#errorSpan').invoke('text').should('include', 'aprobado');
    })
    
    it('should show "función" as "T-student" and "error" as "aprobado"', () => {
        cy.get('#x0Input').type('0');
        cy.get('#x1Input').type('1.1812');
        cy.get('#numSegInput').type('10');
        cy.get('#errorInput').type('0.001');
        cy.get('#TsRadio').check();
        cy.get('#dofInput').type('10')
        cy.get('#process').click();
        cy.get('#typeSpan').invoke('text').should('include', 'T-student');
        cy.get('#errorSpan').invoke('text').should('include', 'aprobado');
    })

    it('has to close the modal', () => {
        cy.get('#closeA5').should('exist').click();
        cy.wait(1000);
        cy.get('.a5Container').should('not.exist');
    })
})