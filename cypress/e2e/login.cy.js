import Login from '../pages/login'
import Inventory from '../pages/inventory'
describe('Login', () => {
  
  beforeEach(() => {
    //cy.visit('https://www.saucedemo.com/')
    Login.visitarPagina()
     })  
  

  it('Realizar login com sucesso', () => {
       //act
       Login.preencherCredenciaisValidas()

        //assert
       Inventory.validarAcessoAPagina()
  })

   it('Realizar login informando credenciais invalidas', () => {
         //act
        Login.preencherCredenciaisInvalidas()

        //assert
        Login.validarErroCredenciaisInvalidas()
   }) 
})