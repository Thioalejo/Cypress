describe('Aserciones', () => {
    before(()=>{
        cy.once('uncaught:exception', () => false);
        cy.visit('/automation-practice-form')
    })
    //Si necesito que forzadamente, cargue la pagina en cada test y no solo una vez, se utiliza beforeEach
   /*beforeEach(()=>{
        cy.once('uncaught:exception', () => false);
        cy.visit('/automation-practice-form')
    })*/

    after(()=>{
        cy.visit('/')
    })

    it('Asercion ', () => {
     //cy.once('uncaught:exception', () => false);
     //cy.visit('/automation-practice-form')
     //validar que la url si sea la que esperamos visita
     cy.url().should('include','demoqa.com')
     ////valida que sea visible 
     cy.get('#firstName').should('be.visible')
     //para pasarle 2 aserciones
     cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
  })

  it('Asercion 2', () => {
    //cy.once('uncaught:exception', () => false);
    //cy.visit('/automation-practice-form')
    //validar que la url si sea la que esperamos visita
    cy.url().should('include','demoqa.com')
	cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
        })
 })

 it('Asercion 3', () => {
    // cy.visit('/automation-practice-form')
    cy.url().should('include', 'demoqa.com')
    cy.get('#firstName').then((element) => {
        assert(element.attr('placeholder', 'Firts Name'))
    })
})
 })