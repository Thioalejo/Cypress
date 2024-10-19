describe('Guardando elementos', () => {

     it('Repeticion', () => {
      cy.once('uncaught:exception', () => false);
      cy.visit('/automation-practice-form')
      //obteniendo el elemto padre
      cy.get('input[placeholder="First Name"]').parent()
       //obteniendo los elemtos padres
       cy.get('input[placeholder="First Name"]').parents()
      //obteniendo un elemto especifico de los padres
       cy.get('input[placeholder="First Name"]').parents().find('label')
       //otra
       cy.get('form').find('label')
   })

   it('evitar repeticion', () => {
    cy.once('uncaught:exception', () => false);
   // cy.visit('/automation-practice-form')
    //obteniendo el elemto padre
    cy.get('input[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input')
				const divs = form.find('div')
				const labels = form.find('label')

				//Las asersiones se explicaran a detalle en la proxima clase
				expect(inputs.length).to.eq(15)
				expect(divs.length).to.eq(70)
				expect(labels.length).to.eq(16)
				// Si queremos que este elemento de Jquery se vuelva un elemento de cypress debemos de usar wrap
				cy.wrap(inputs).should('have.length', 15)
			})
 })


  })