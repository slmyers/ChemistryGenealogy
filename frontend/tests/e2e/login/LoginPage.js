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

    //Slightly functional elements that are less UI?
    this.loginRegistrationConfirmToast = element(by.id('loginRegistrationConfirmToast'));
    this.loginSuccessButton = element(by.id('loginSuccessButton'));
    this.logOutButton = element(by.id('theMainLogoutButton'));
    this.loginMainButton = element(by.id('theMainLoginButton'));

    //Icon that indicates that the user is not logged in yet...

    /**
     * Test that the information in the username and password fields match the expected input.
     *
     * @param testUserName An email identifier.
     * @param testUserPass The (hopefully) matching password.
     */
    this.checkLoginInputs = function(testUserName, testUserPass){
        this.loginUserName.sendKeys(testUserName);
        this.loginPassword.sendKeys(testUserPass);
        expect(this.loginUserName.getText().toEqual(testUserName));
        expect(this.loginPassword.getText().toEqual(testUserPass));

    };


    /**
     * Test that the login for the user worked.
     *
     * @param testUserName An email identifier.
     * @param testUserPass The (hopefuilly?) matching password.
     */
    this.loginFunction = function(testUserName, testUserPass){
        //Supply information
        this.loginUserName.sendKeys(testUserName);
        this.loginPassword.sendKeys(testUserPass);

        //Click Login Button
        this.loginLoginButton.click();

        //Allow to process
        browser.waitForAngular();

        //Now confirm user is logged in. By checking the top right hand corner displays the username.
        expect(this.loginSuccessButton.getText().toEqual(testUserName));
    };

    /**
     * Test that we can cancel logging in.
     *
     * @param testUserName An email identifier.
     * @param testUserPass The (hopefuilly?) matching password.
     */
    this.loginCancelFunction = function(testUserName, testUserPass){
        //Supply information
        //Test info
        //pass testPassword
        //usr 'testEmail@email.ca'
        this.loginUserName.sendKeys(testUserName);
        this.loginPassword.sendKeys(testUserPass);

        //Click Cancel Button.
        this.loginCancelButton.click();

        //Allow browser to work...
        browser.waitForAngular();

        //Now confirm the cancel (by the login box going away). So the main login button should be displayed.
        expect(this.loginMainButton.isDisplayed());

    };

    /**
     * Test that we can navigate to the Registration page.
     */
    this.testRegisterNavigation = function(){
        //Merely click the register button from the login screen.
        this.loginRegisterButton.click();

        //Now confirm that we navigated to the page. By checking that the first field of the registration is displayed.
        expect(this.loginRegistrationEmail.isDisplayed());
    };


    /**
     * Test that the cancel button on the Registration page works.
     *
     * @param testRegistrationEmail Email used to register.
     * @param testRegistrationPassword Password used to register.
     * @param testRegistrationFirstName First name used to register.
     * @param testRegistrationLastName Last name used to register.
     */
    this.testRegistrationCancel = function(testRegistrationEmail, testRegistrationPassword, testRegistrationFirstName, testRegistrationLastName){
        //Put the information into the registration fields.
        this.loginRegistrationEmail.sendKeys(testRegistrationEmail);
        this.loginRegistrationPassword.sendKeys(testRegistrationPassword);
        this.loginRegistrationFirstName.sendKeys(testRegistrationFirstName);
        this.loginRegistrationLastName.sendKeys(testRegistrationLastName);

        //Click the cancel button
        this.loginRegistrationCancelButton.click();

        //Allow browser to work...
        browser.waitForAngular();

        //Now confirm that the cancel button was hit. So expect the main login logo to be displayed again.
        expect(this.loginMainButton.isDisplayed());

    };


    /**
     * Test the entire registration process functionality.
     *
     * @param testRegistrationEmail Email used to register.
     * @param testRegistrationPassword Password used to register.
     * @param testRegistrationFirstName First name used to register.
     * @param testRegistrationLastName Last name used to register.
     */

    this.testRegistration = function(testRegistrationEmail, testRegistrationPassword, testRegistrationFirstName, testRegistrationLastName){
        //Put the information into the registration fields.
        this.loginRegistrationEmail.sendKeys(testRegistrationEmail);
        this.loginRegistrationPassword.sendKeys(testRegistrationPassword);
        this.loginRegistrationFirstName.sendKeys(testRegistrationFirstName);
        this.loginRegistrationLastName.sendKeys(testRegistrationLastName);

        //Click the Registration Commit Button
        this.loginRegistrationRegisterButton.click();

        //Allow browser to work...
        browser.waitForAngular();

        //Now confirm the registration process succeeded. By checking if the toast is displayed.
        // toast is removed
        //expect(this.loginRegistrationConfirmToast.isDisplayed());

    };

    /**
     * This function tests that someone can log out of the application successfully.
     *
     * @param testUserName An email identifier.
     * @param testUserPass The (hopefuilly?) matching password.
     */
    this.testLogoutFunction = function(testUserName, testUserPass){
        //First log in...
        this.loginUserName.sendKeys(testUserName);
        this.loginPassword.sendKeys(testUserPass);

        //Click login Button.
        this.loginLoginButton.click();

        //Allow browser to work...
        browser.waitForAngular();

        //Now go to top button and click it, bringing up the logout prompt.
        this.loginSuccessButton.click();

        //Now a new "logout" explicit prompt is shown. Click it
        this.logOutButton.click();

        //Expect the main login button to be displayed again (as in they are logged out).
        expect(this.loginMainButton.isDisplayed());

    }




};

/**
 * Required for proper Protractor functionality.
 * @type {LoginPage}
 */
module.exports = new LoginPage();
