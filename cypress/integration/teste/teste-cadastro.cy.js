/// <reference types="cypress" />
import HomePage from "../../page/home-page"
import CreatAccount from "../../page/creataccount-page"
import MyAccountPage from "../../page/myaccount-page"

describe('Teste Luna',()=>{
    const homepage = new HomePage();
    const creataccount = new CreatAccount();
    const myaccountpage = new MyAccountPage();
    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario =>{
        it('Teste de cadastro com sucesso' ,()=>{
            homepage.acessarluna();
            homepage.validarpáginahome();
            homepage.direcionarcadastro();
            creataccount.validarpáginaCreatAccount();
            creataccount.preenchercadastro(
                usuario.name,
                 usuario.lastname, 
                 usuario.email,
                 usuario.password,
                 usuario.confirmpassword);
            myaccountpage.validarpáginaMyAccount();
                
        })
    
    })
    
})