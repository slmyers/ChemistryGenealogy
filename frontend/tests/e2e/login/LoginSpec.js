/**
 * Login Scenario for testing.
 */

var util = require('util');

describe('Login', function(){

    //Creates an instance of the LoginPage object, which holds most of the specific low level details of the tests.
    var loginPage = require('LoginPage.js');


    //Variables that I will use through the tests.
    var username = 'testEmail@email.ca';
    var password = 'testPassword';
    var registerUsername = 'rusername@email.ca';
    var registerPassword = 'testPassword2';
    var registerFirst = 'rFirst';
    var registerSecond = 'rSecond';

    //Should do this before each and every test, that is the purpose of this function.
    //For now set this to be the local host value.
    beforeEach(function () {
       browser.get('localhost:5000');
    });


    //Now each test has it's own little summary before the function saying the goal.

    it('Should have correct input values', function() {
        loginPage.checkLoginInputs(username, password);

        expect(this.loginUserName.getText().toEqual(username));
        expect(this.loginPassword.getText().toEqual(password));
    });


    it('Should be able to log in', function(){
       loginPage.loginFunction(username, password);

        expect(this.loginSuccessButton.getText().toEqual(testUserName));
    });


    it('Should be able to cancel logging in', function(){
       loginPage.loginCancelFunction(username, password);

        expect(this.loginMainButton.isDisplayed());
    });

    it('Should be able to navigate to the register page', function () {
        loginPage.testRegisterNavigation();

        expect(this.loginRegistrationEmail.isDisplayed());

    });


    it('Should be able to cancel registration', function(){
        loginPage.testRegistrationCancel(registerUsername, registerPassword, registerFirst, registerSecond);

        expect(this.loginMainButton.isDisplayed());
    });


    it('Should be able to register', function(){
        loginPage.testRegistration(registerUsername, registerPassword, registerFirst, registerSecond);

        expect(this.loginRegistrationConfirmToast.isDisplayed());
    });

    it('Should be able to log out', function(){
        loginPage.testLogoutFunction(username, password);

        expect(this.loginMainButton.isDisplayed());
    });

});