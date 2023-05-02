class CreatAccount{

    urlCreatAccount = 'https://magento.softwaretestingboard.com/customer/account/create/'
    inputFirstName = 'input[id="firstname"]'
    inputLastName = 'input[id="lastname"]'
    inputNewSletter = 'input[id="is_subscribed"]'
    inputEmail = 'input[id="email_address"]'
    inputPassword = 'input[id="password"]'
    inputConfirmPassword = 'input[id="password-confirmation"]'
    btnSubmitAccount = '.primary'

    validarpáginaCreatAccount(){
        cy.url(this.urlCreatAccount).should('eq','https://magento.softwaretestingboard.com/customer/account/create/' )
    }

    preenchercadastro(name, lastname, email, password, confirmpassword){
        cy.get(this.inputFirstName).type(name)
        cy.get(this.inputLastName).type(lastname)
        cy.get(this.inputNewSletter).click()
        cy.get(this.inputEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.inputConfirmPassword).type(confirmpassword)
        cy.get(this.btnSubmitAccount).contains('span', 'Create an Account').click();
    }
}
export default CreatAccount