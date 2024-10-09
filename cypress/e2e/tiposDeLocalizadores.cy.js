describe('Tipos d localizadores', () => {
    
    it('Obtenerlo por medio de un tag', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('/automation-practice-form')
        //para detectar y acceder a todos los input
        cy.get('input')
        cy.get('button')
    })

    
    it('Obtenerlo por medio de un tag de un atributo', () => {
       // cy.once('uncaught:exception', () => false);
        //cy.visit('/automation-practice-form')
        //para detectar si hay un placeholder con First Name
        cy.get('[placeholder="First Name"]')

    })

    //Si tengo varios elementos que tengan First Name, se busca asi par acortar la busqueda, haciendola mas especifica
    it('Obtenerlo por medio de un tag de un atributo y un tag', () => {
        //Con esto se le dice, quiero que me obtengas un input, donde el placeholder sea igual a First Name  
        cy.get('input[placeholder="First Name"]')
 
     })

     it('Obtenerlo por medio de un tag por medio de un Id', () => {
        cy.get('#firstName')
     })

     it('Obtenerlo por medio de un tag por medio de una clase', () => {
        //la clase copiada esta asi .mr-sm-2 form-control, pero se debe poner con un punto para que cypress reconozca .mr-sm-2.form-control
        cy.get('.mr-sm-2.form-control')
     })
  })