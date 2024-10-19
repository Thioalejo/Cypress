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

     it('Encontrar elementos usando contains', () => {
        cy.contains('Reading')

        //para deliminar mas la busqueda, puedo pasar la clase y el texto a buscar
        cy.contains('.header-wrapper','Widgets')
     })

     it('Encontrar el elemento parent', () => {
      //obteniendo el elemto padre
      cy.get('input[placeholder="First Name"]').parent()
       //obteniendo los elemtos padres
       cy.get('input[placeholder="First Name"]').parents()
      //obteniendo un elemto especifico de los padres
       cy.get('input[placeholder="First Name"]').parents().find('label')

       //otra
       cy.get('form').find('label')
   })


  })