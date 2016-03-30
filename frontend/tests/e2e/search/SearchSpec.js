/**
 * Protractor end to end testing for the search page functionality.
 *
 * @constructor
 */

// what is this???
var util = require('util');

describe('Search', function() {

    //it('has a login button', function() {
    //  browser.get('http://localhost:5000/search');
    //  expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //it('has a search bar', function(){
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('peopleSearchInput')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('The search bar can accept text input and retains it', function(){
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //});
    //
    //it('Has a data visualization', function(){
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('dataVis')).isPresent()).toBe(true);
    //});
    //
    //
    //it('Has the search options displayed', function(){
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    browser.waitForAngular();
    //    expect(element(by.id('searchResultsArray')).isPresent()).toBe(true);
    //    //searchResultsArray
    //});
    //
    //it('Has a data visualization', function(){
    //
    //});
    //
    //
    //
    ///** LOGIN TESTS **/
    //
    //it('Lets the login button be clicked and brings up the login prompt', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    //userDialog
    //
    //});
    //
    //
    //it('The user can enter their username and password', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    //userDialog
    //
    //    //Enter data.
    //    element(by.model('loginUser.email')).sendKeys("Todd");
    //    element(by.model('loginUser.password')).sendKeys("Todd");
    //
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("Todd");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("Todd");
    //
    //    //loginUser.email
    //
    //    //loginUser.password
    //});
    //
    //it('The user can cancel their login process', function(){
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    //userDialog
    //
    //    //Enter data.
    //    element(by.model('loginUser.email')).sendKeys("Todd");
    //    element(by.model('loginUser.password')).sendKeys("Todd");
    //
    //    //Check fields before hitting cancel button.
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("Todd");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("Todd");
    //
    //    //Now click cancel button.
    //    element(by.id('loginCancelButton')).click();
    //    expect(element(by.id('userDialog')).isPresent()).toBe(false);
    //});
    //
    //
    //it('The user can navigate to the registration page', function(){
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.id('loginRegisterButton')).click();
    //    expect(element(by.model('registerUser.email')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.password')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.firstName')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.lastName')).isPresent()).toBe(true);
    //    //loginRegisterButton
    //});
    //
    //
    //it('The user can navigate to the registration page and then cancel', function(){
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.id('loginRegisterButton')).click();
    //    expect(element(by.model('registerUser.email')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.password')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.firstName')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.lastName')).isPresent()).toBe(true);
    //
    //
    //    element(by.id('loginRegistrationCancelButton')).click();
    //    expect(element(by.id('userDialog')).isPresent()).toBe(false);
    //});
    //
    //it('The user can fill the registration form out and submit their registration', function(){
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.id('loginRegisterButton')).click();
    //    expect(element(by.model('registerUser.email')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.password')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.firstName')).isPresent()).toBe(true);
    //    expect(element(by.model('registerUser.lastName')).isPresent()).toBe(true);
    //
    //
    //    element(by.id('loginRegistrationRegisterButton')).click();
    //    //expect(element(by.id('userDialog')).isPresent()).toBe(false);
    //});
    //
    //it('User can log into the system.', function(){
    //
    //    //pw:testPassword
    //    //usr:testEmail@email.ca
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    //Enter data.
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //    //Check the fields before hitting the login button.
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //    //loginSuccessButton
    //
    //    expect(element(by.id('loginSuccessButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('User can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //
    //it('Administrator still has their logout button accessible', function(){
    //
    //    //pw:testPassword
    //    //usr:testEmail@email.ca
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    //Enter data.
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //    //Check the fields before hitting the login button.
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //    //loginSuccessButton
    //
    //    expect(element(by.id('loginSuccessButton')).isPresent()).toBe(true);
    //});
    //
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('User can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //
    //
    //it('Administrator has access to the administrator only button still.', function(){
    //
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //
    //
    //    expect(element(by.id('adminOnlyButton')).isPresent()).toBe(true);
    //});
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('Admin can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //it('Administrator has access to the search bar still.', function(){
    //
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //
    //
    //    expect(element(by.id('adminOnlyButton')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('peopleSearchInput')).isPresent()).toBe(true);
    //});
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('Admin can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //it('Administrator has access to the display sstill.', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //
    //    expect(element(by.id('adminOnlyButton')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('dataVis')).isPresent()).toBe(true);
    //});
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('Admin can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //
    //
    //it('Administrator can log into the system with special functionalities.', function(){
    //
    //
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //    element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('loginUser.password')).sendKeys("testPassword");
    //
    //
    //    expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
    //    expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");
    //
    //    element(by.id('loginLoginButton')).click();
    //
    //
    //    expect(element(by.id('loginSuccessButton')).isPresent()).toBe(true);
    //    expect(element(by.id('adminOnlyButton')).isPresent()).toBe(true);
    //});
    //
    //
    ///**
    // * Also is being used to reset the webpage, need to instruct it to log out directly.
    // */
    //it('Administrator can log out of the system', function(){
    //    element(by.id('loginSuccessButton')).click();
    //
    //    element(by.id('theMainLogoutButton')).click();
    //
    //    browser.get('http://localhost:5000/search');
    //    expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    //});
    //
    //
    //
    //it('Should have the autocomplete search data displayed for target', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoTarget')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Should have the autocomplete search data displayed for mentors', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoMentors')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Should have the autocomplete search data displayed for Supervisors', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoSupervisors')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Should have the autocomplete search data displayed for Supervised', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoSupervised')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Should navigate to the page of the target when target is clicked', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoSupervised')).isPresent()).toBe(true);
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //});
    //
    //
    //it('Should navigate to the page of the supervised when supervised is clicked', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoSupervised')).isPresent()).toBe(true);
    //
    //    element.all(by.id('searchDetailedInfoSupervised')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/2');
    //});
    //
    //
    //it('Should navigate to the page of the supervisor when supervisor is clicked', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoSupervisors')).isPresent()).toBe(true);
    //
    //    element.all(by.id('searchDetailedInfoSupervisors')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/3');
    //});
    //
    //
    //it('Should navigate to the page of the mentors when mentors is clicked', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoMentors')).isPresent()).toBe(true);
    //
    //    element.all(by.id('searchDetailedInfoMentors')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //});




    
    //searchDetailedInfoMentors

    /** Odd synchronization bug, tests should work if that is fixed.

    it('Administrator can navigate to administrator panel.', function(){

        //pw:testPassword
        //usr:testEmail@email.ca
        browser.get('http://localhost:5000/search');
        element(by.id('theMainLoginButton')).click();

        expect(element(by.id('userDialog')).isPresent()).toBe(true);

        element(by.model('loginUser.email')).sendKeys("testEmail@email.ca");
        element(by.model('loginUser.password')).sendKeys("testPassword");


        expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("testEmail@email.ca");
        expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("testPassword");

        element(by.id('loginLoginButton')).click();


        expect(element(by.id('loginSuccessButton')).isPresent()).toBe(true);
        expect(element(by.id('adminOnlyButton')).isPresent()).toBe(true);

        element(by.id('adminOnlyButton')).click();
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');


    });



    it('Administrator can navigate to the search page again and is still logged in.', function(){

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');

        element(by.id('adminOnlyButton')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');

    });**/


    //adminOnlyButton



    /*
    idk if you want to keep this stuff
    //Creates an instance of the LoginPage object, which holds most of the specific low level details of the tests.
    var searchPage = require('./SearchPage.js');


    //Variables that will be used through these tests.
    var testExampleName = 'david bundle';




    //Should do this before each and every test, that is the purpose of this function.
    //For now set this to be the local host value for the search page.
    beforeEach(function () {
        browser.get('localhost:5000/search');
    });


    it('Should have correct input values', function() {
        searchPage.searchBarInputCheck(testExampleName);

        expect(this.mainSearchBar.getText().toEqual(testExampleName));
    });

    it('Should have correct input values', function() {
        searchPage.testSearchNameOption(testExampleName);

        expect(this.mainSearchBar.getText().toEqual(testExampleName));
    });


    it('Target value should be as expected', function() {
        searchPage.testSearchTarget();

        expect(this.searchDetailedInfoTarget.getText().toEqual('david bundle'));
    });

    it('Mentors values should be as expected', function() {
        searchPage.testSearchMentors();


        expect(this.searchDetailedInfoTarget.first.getText().toBe('raymond lemieux'));
    });


    it('Mentored values should be as expected', function() {
        searchPage.testSearchMentored();

        expect(this.searchDetailedInfoTarget.first.getText().toBe('todd lowary'));

    });

    it('Supervisors values should be as expected', function() {
        searchPage.testSearchSupervisors();

        expect(this.searchDetailedInfoTarget.first.getText().toBe('james baddiley'));

    });


    it('Navigation to View page from search values should be as expected', function() {
        searchPage.testSearchSupervisors();

        expect(browser.getCurrentUrl.toBe('http://localhost:5000/view/7'));

    }); */
});
