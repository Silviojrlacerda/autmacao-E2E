class HomePage{

    btnCreatAccount = 'a:contains(Create an Account)'
    url = 'https://magento.softwaretestingboard.com/'

    acessarluna(){
        cy.visit(this.url)
    }

    validarpáginahome(){
        cy.url(this.urlCreatAccount).should('eq','https://magento.softwaretestingboard.com/' )
    }

    direcionarcadastro(){
        cy.get(this.btnCreatAccount).first().click()
    }


}
export default HomePage