/**
 * Login PageObject for Protractor testing.
 *
 * Login View: userDialog.html, the popup window that appears.
 */

var LoginPage = function(){
    //Obtain the basic elements of the model for the login/register page.
    this.loginUserName = element(by.model('loginUser.email'));
    this.loginPassword = element(by.model('loginUser.password'));
    this.loginLoginButton = element(by.id('loginLoginButton'));
    this.loginCancelButton = element(by.id('loginCancelButton'));
    this.loginRegisterButton = element(by.id('loginRegisterButton'));

    //Registration page specific UI elements.
    this.loginRegistrationEmail = element(by.model('registerUser.email'));
    this.loginRegistrationPassword = element(by.model('registerUser.password'));
    this.loginRegistrationFirstName = element(by.model('registerUser.firstName'));
    this.loginRegistrationLastName = element(by.model('registerUser.lastName'));
    this.loginRegistrationRegisterButton = element(by.id('loginRegistrationRegisterButton'));
    this.loginRegistrationCancelButton = element(by.id('loginRegistrationCancelButton'));


    it('Should be able to take in a first and last name accurately'), function(testUserName, testUserPass){
        this.loginUserName.sendKeys(testUserName);
        this.loginPassword.sendKeys(testUserPass);



    }



};

/**
 * Required for proper Protractor functionality.
 * @type {LoginPage}
 */
module.exports = new LoginPage();