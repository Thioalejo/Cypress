describe('Navegacion', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/?hl=es')
  })

  it('Recargar pagina', () => {
    cy.reload()
  })

  it('Recargar pagina de forma forzada (sin cache)', () => {
    cy.visit('https://www.google.com/?hl=es')
    cy.reload(true)
  })

  it('Navegar hacia atrás', () => {
    cy.reload()
    cy.visit('https://www.google.com/?hl=es')
    cy.visit('https://www.google.com/search?q=platzi&sca_esv=427163c40a0d98b7&hl=es&source=hp&ei=YN4DZ4ikNI7z0PEPrN3B4QI&iflsig=AL9hbdgAAAAAZwPscKP7KAQke0yMflbzJJl7HTAj0BxK&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=plazsi&gs_lp=Egdnd3Mtd2l6IgZwbGF6c2kqAggAMhAQLhiABBixAxjRAxjHARgKMgoQABiABBixAxgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKSP5GUOwGWLo8cAF4AJABAJgBwAGgAdgGqgEDMC42uAEDyAEA-AEBmAIHoAL4BqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgILEAAYgAQYsQMYgwHCAgUQABiABMICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMYgwEYigXCAggQABiABBixA8ICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxjJA8ICDhAuGIAEGLEDGMcBGK8BwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxjUAsICDRAAGIAEGLEDGMkDGArCAhAQLhiABBixAxjHARgKGK8BwgINEC4YgAQYxwEYChivAcICDRAuGIAEGLEDGNQCGAqYAw6SBwMxLjagB91N&sclient=gws-wiz')
    cy.go('back')
    //indice, -1 cy.go(-1)
  })

  it.only('Navegar hacia adelante', () => {
    cy.reload()
    cy.visit('https://www.google.com/?hl=es')
    cy.visit('https://www.google.com/search?q=platzi&sca_esv=427163c40a0d98b7&hl=es&source=hp&ei=YN4DZ4ikNI7z0PEPrN3B4QI&iflsig=AL9hbdgAAAAAZwPscKP7KAQke0yMflbzJJl7HTAj0BxK&gs_ssp=eJzj4tVP1zc0zKiqKMvJzjNQYDRgdGDwYivISSypygQAby4H-g&oq=plazsi&gs_lp=Egdnd3Mtd2l6IgZwbGF6c2kqAggAMhAQLhiABBixAxjRAxjHARgKMgoQABiABBixAxgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKSP5GUOwGWLo8cAF4AJABAJgBwAGgAdgGqgEDMC42uAEDyAEA-AEBmAIHoAL4BqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgILEAAYgAQYsQMYgwHCAgUQABiABMICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMYgwEYigXCAggQABiABBixA8ICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxjJA8ICDhAuGIAEGLEDGMcBGK8BwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxjUAsICDRAAGIAEGLEDGMkDGArCAhAQLhiABBixAxjHARgKGK8BwgINEC4YgAQYxwEYChivAcICDRAuGIAEGLEDGNQCGAqYAw6SBwMxLjagB91N&sclient=gws-wiz')
    cy.go('back')
    cy.go('forward') //indice, -1 cy.go(1)
    
  })
})