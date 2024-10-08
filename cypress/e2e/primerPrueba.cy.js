describe('Primer prueba', () => {
    it('Navegar a nuestra primer pagina', () => {
        cy.visit('https://platzi.com/home/')
    })

    it('Navegar a nuestra segunda pagina', () => {
        cy.visit('https://www.google.com/?hl=es')
    })
  })

