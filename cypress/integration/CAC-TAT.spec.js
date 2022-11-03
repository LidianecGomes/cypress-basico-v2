/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach (function(){
        cy.visit('./src/index.html')
    })    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  
    })

    it('preencha os campos obrigatórios e envia o formulário', function() {
        const longtext = "Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste"
        cy.get('#firstName').type("Lidiane")
        cy.get('#lastName').type("Gomes")
        cy.get('#email').type("teste@teste.com")
        cy.get('#open-text-area').type(longtext, {delay:0})
        cy.contains('button','Enviar').click()

        cy.get('.success').should('be.visible')
     
  
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        
        cy.get('#firstName').type("Lidiane")
        cy.get('#lastName').type("Gomes")
        cy.get('#email').type("teste")
        cy.get('#open-text-area').type("teste")
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
     
  
    })
    it('campo telefone continua vazio quando preenchido com valor não númerico', function() {
        cy.get('#phone')
            .type("abcde")
            .should('have.value', '')   
  
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {

        cy.get('#firstName').type("Lidiane")
        cy.get('#lastName').type("Gomes")
        cy.get('#email').type("teste@teste.com")
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type("teste")
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
  
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('#firstName')
          .type("Lidiane")
          .should('have.value','Lidiane')
          .clear()
          .should('have.value','')
        cy.get('#lastName')
          .type("Gomes")
          .should('have.value','Gomes')
          .clear()
          .should('have.value','')
        cy.get('#email')
          .type("teste@teste.com")
          .should('have.value','teste@teste.com')
          .clear()
          .should('have.value','')
        cy.get('#phone')
          .type("8199999999")
          .should('have.value','8199999999')
          .clear()
          .should('have.value','')
        
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){

        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado', function(){

        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it.only('seleciona um produto (YouTube) por seu texto', function(){

        cy.get('#product')
          .select('YouTube')
          .should('have.value','youtube')
        
    })


  })
  