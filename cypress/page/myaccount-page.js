class MyAccountPage{

    url = 'https://magento.softwaretestingboard.com/customer/account/'

    validarpáginaMyAccount(){
        cy.url(this.urlCreatAccount).should('eq','https://magento.softwaretestingboard.com/customer/account/' )
    }
}
export default MyAccountPage