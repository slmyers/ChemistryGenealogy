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
    //
    //
    ///**
    // * Checking the target view page.
    // */
    //it('Confirm that upon navigation to the view page for target we see the top bar', function(){
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
    //    expect(element(by.id('viewPageTopBar')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Confirm that upon navigation to the view pages name shown is correct', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //    //expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //    element.all(by.css('.autocompleteItem')).first().click();
    //
    //    //http://localhost:5000/view/1
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('searchDetailedInfoTarget')).isPresent()).toBe(true);
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //    expect(element(by.id('viewPageTopBarName')).getText()).toEqual("TODD LOWARY");
    //
    //});
    //
    //it('Confirm that upon navigation to the view pages name shown is correct', function(){
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageTopBarPosition')).isPresent()).toBe(true);
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //    expect(element(by.id('viewPageTopBarPosition')).getText()).toEqual("PROFESSOR");
    //
    //});


    //it('Confirm that upon navigation to the view pages institution shown is correct', function() {
    //
    //        browser.get('http://localhost:5000/search');
    //        //Enter "Todd" into the search bar.
    //        element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //        //Check that the search bar has the correct name in itself.
    //        expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //        expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //        element.all(by.css('.autocompleteItem')).first().click();
    //
    //        //http://localhost:5000/view/1
    //
    //        //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //
    //        element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //        expect(element(by.id('viewPageTopBarPosition')).isPresent()).toBe(true);
    //
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //        expect(element(by.id('viewPageTopBarPosition')).getText()).toEqual("PROFESSOR");
    //
    //
    //    expect(element(by.id('viewPageTopBarInstitution')).isPresent()).toBe(true);
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //
    //});

    //
    //it('Confirm that view page shows Degrees', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    //viewPageDegreesBox
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Confirm that view page shows Postdocs', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    //viewPageDegreesBox
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Confirm that view page shows Supervised', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    //viewPageDegreesBox
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Confirm that view page viewPageDegreesDegreeType is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageDegreesDegreeType')).getText()).toEqual("phd");
    //
    //    //viewPageDegreesDegreeType
    //
    //});
    //
    //it('Confirm that view page viewPageDegreesDegreeYear is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageDegreesDegreeYear')).getText()).toEqual("1993");
    //
    //});
    //
    //
    //it('Confirm that view page viewPageDegreesDegreeInstitution is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).getText()).toEqual("university of alberta");
    //
    //});

    //it('Confirm that view page viewPageDegreesSupervisorName is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageDegreesSupervisorName')).getText()).toEqual("supervised by ole hindsgaul");
    //
    //});
    //
    //it('Confirm that view page viewPageSupervisedName is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedName')).getText()).toEqual("wei shi");
    //
    //});


    //it('Confirm that view page viewPageSupervisedInstitution is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedInstitution')).getText()).toEqual("university of alberta");
    //
    //});

    //
    //it('Confirm that view page viewPageSupervisedDegreeType is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedDegreeType')).getText()).toEqual("phd");
    //
    //});
    //
    //
    //
    //it('Confirm that view page viewPageSupervisedYear is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedYear')).getText()).toEqual("2008");
    //
    //});



    //it('Confirm that view page postdocs institution information is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedYear')).getText()).toEqual("2008");
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsName')).getText()).toEqual("university of alberta");
    //
    //});


    //it('Confirm that view page postdocs year information is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedYear')).getText()).toEqual("2008");
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsYears')).getText()).toEqual("1993 - 1995");
    //
    //});

    //
    //
    //it('Confirm that view page postdocs mentor name information is as expected', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //    expect(element(by.id('viewPageSupervisedYear')).getText()).toEqual("2008");
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsMentorName')).getText()).toEqual("mentored by david bundle");
    //
    //});

    /**
     * I am breaking from the current example because I lack any sort of "mentored" information for the running
     * sample data example.
     */


    //it('Confirm that view page viewPageMentoredName information is as expected', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredName')).getText()).toEqual("todd lowary");
    //
    //});



    //it('Confirm that view page viewPageMentoredName information is as expected', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredYears')).getText()).toEqual("1993 - 1995");
    //
    //});
    //
    //it('Confirm that view page viewPageMentoredName information is as expected', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredInstitution')).getText()).toEqual("university of alberta");
    //
    //});


    /**
     * View page navigation. Does it traverse properly?
     */


    //it('Can traverse through view page to degrees page', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    element.all(by.id('viewSupervisorCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/3');
    //});
    //
    //it('Can traverse through view page to postdocs link page', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    element.all(by.id('viewPagePostDocsCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //});

    //it('Can traverse through view page to postdocs link page', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/2');
    //});

    /**
     * Check that the view page filters work.
     */

    //
    //it('Check that the view page\'s full detail button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageAllDetailsButton')).isPresent()).toBe(true);
    //});

    //
    //it('Check that the view page\'sviewPageMentorDetailsButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageMentorDetailsButton')).isPresent()).toBe(true);
    //});

    //it('Check that the view page\'s viewPageMentoredDetailsButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageMentoredDetailsButton')).isPresent()).toBe(true);
    //});
    //

    //
    //it('Check that the view page\'s viewPageSupervisorDetailsButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //});


    //it('Check that the view page\'s viewPageSupervisedDetailsButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //});
    //
    //
    //it('Check that the view page\'s viewPageGoToEditButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageGoToEditButton')).isPresent()).toBe(true);
    //});



    //it('Check that the view page\'s viewPageGoToEditButton button is present', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageGoToHomeButton')).isPresent()).toBe(true);
    //});



    //
    //it('Check that the view page\'s viewPage postdocs (only) button works ', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageMentorDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageMentorDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //
    //});
    //



    //it('Check that the view page\'s viewPage mentored (only) button works ', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageMentoredDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageMentoredDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(false);
    //    //expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //
    //});



    //it('Check that the view page\'s viewPage degrees (only) button works ', function() {
    //
    //    browser.get('http://localhost:5000/search');
    //    //Enter "Todd" into the search bar.
    //    element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //    //Check that the search bar has the correct name in itself.
    //    expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //    expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisorDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(true);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //
    //});


    //
    //it('Check that the view page\'s viewPage Supervised (only) button works ', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisedDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //
    //});


    //it('Check that the view page\'s viewPage navigate to edit page button works ', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('viewPageGoToEditButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageGoToEditButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/edit/1');
    //
    //
    //});
    //
    //
    //it('Check that the view page\'s viewPage navigate to home/main page button works ', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('viewPageGoToHomeButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageGoToHomeButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});


    //it('View page navigation stress test ', function() {
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('viewPageGoToHomeButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageGoToHomeButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //    /** Now go to view page 1 and then  check supervised only **/
    //        element(by.id('peopleSearchInput')).sendKeys("Todd");
    //
    //        //Check that the search bar has the correct name in itself.
    //        expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");
    //
    //
    //        expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //        element.all(by.css('.autocompleteItem')).first().click();
    //
    //        //http://localhost:5000/view/1
    //
    //        //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //
    //        element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //        //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //        expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //        element.all(by.id('viewPageSupervisedDetailsButton')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //
    //        expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now check the navigation from home button **/
    //    expect(element(by.id('viewPageGoToHomeButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageGoToHomeButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //
    //
    //    /** Now check the mentored's only button **/
    //        element(by.id('peopleSearchInput')).sendKeys("David");
    //
    //        //Check that the search bar has the correct name in itself.
    //        expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("David");
    //
    //
    //        expect(element(by.css('.autocompleteItem')).isPresent()).toBe(true);
    //
    //        element.all(by.css('.autocompleteItem')).first().click();
    //
    //        //http://localhost:5000/view/1
    //
    //        //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //
    //        element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //        //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //        expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //        element.all(by.id('viewPageSupervisorDetailsButton')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(true);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now check the degrees only button **/
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/4');
    //
    //        expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //        element.all(by.id('viewPageSupervisorDetailsButton')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(true);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now test mentored button again **/
    //    expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisorDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(true);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now test going to the postdocs only button **/
    //
    //        expect(element(by.id('viewPageMentorDetailsButton')).isPresent()).toBe(true);
    //        element.all(by.id('viewPageMentorDetailsButton')).first().click();
    //
    //
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(true);
    //        expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(true);
    //
    //        expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //        expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(false);
    //        expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //        expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Continue stress test after **/
    //
    //
    //
    //
    //});
    //
    //
    //it('View page navigation stress test CONTINUED ', function() {
    //
    //    /** Now test going back to mentored  **/
    //    expect(element(by.id('viewPageSupervisorDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisorDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(true);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now check the navigation from home button **/
    //    expect(element(by.id('viewPageGoToHomeButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageGoToHomeButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //    /** Now test the supervised **/
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
    //
    //    element.all(by.id('searchDetailedInfoTarget')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //
    //    //element.all(by.id('viewPageSupervisedCardInfo')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisedDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now test postdocs **/
    //
    //    expect(element(by.id('viewPageMentorDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageMentorDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesSupervisorName')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now test supervised **/
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    element.all(by.id('viewPageSupervisedDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsArray')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostDocsCardInfo')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution')).isPresent()).toBe(false);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedName')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDetailsButton')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeType')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //    expect(element(by.id('')).isPresent()).toBe(false);
    //
    //    /** Now test navigation to the edit page one last time **/
    //
    //
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/view/1');
    //
    //        expect(element(by.id('viewPageGoToEditButton')).isPresent()).toBe(true);
    //        element.all(by.id('viewPageGoToEditButton')).first().click();
    //
    //
    //        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/edit/1');
    //
    //});

    //it('Should be able to log out', function(){
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //    //loginSuccessButton
    //
    //    ////Enter data.
    //    //element(by.model('loginUser.email')).sendKeys("Todd");
    //    //element(by.model('loginUser.password')).sendKeys("Todd");
    //    //
    //    ////Check fields before hitting cancel button.
    //    //expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("Todd");
    //    //expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("Todd");
    //
    //
    //});


    //it('Should be able to register', function(){
    //
    //    /** NOTE STRONGLY: ONCE THIS TEST IS RAN IT WILL ALWAYS ALWAYS ALWAYS FAIL. WHY? BECAUSE
    //     * THE DATABASE STILL MAINTAINS THE VALUE OF THE USER EMAIL USED HERE!
    //     *
    //     * SOLUTION:
    //     * MUST REFRESH DATABASE OR CHANGE THE NAME HERE OR YOU WILL RUN INTO THIS TEST FAILING!
    //     */
    //    browser.get('http://localhost:5000/search');
    //
    //
    //       // element.all(by.id('loginSuccessButton')).first().click();
    //
    //
    //        browser.get('http://localhost:5000/search');
    //        element(by.id('theMainLoginButton')).click();
    //
    //        expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //
    //        element(by.id('loginRegisterButton')).click();
    //        expect(element(by.model('registerUser.email')).isPresent()).toBe(true);
    //        expect(element(by.model('registerUser.password')).isPresent()).toBe(true);
    //        expect(element(by.model('registerUser.firstName')).isPresent()).toBe(true);
    //        expect(element(by.model('registerUser.lastName')).isPresent()).toBe(true);
    //
    //
    //    //Furnish out the registration page.
    //        element(by.model('registerUser.email')).sendKeys("automatedTestasdsadSADasdASasdas@autotests.ca");
    //        element(by.model('registerUser.password')).sendKeys("Todd");
    //        element(by.model('registerUser.firstName')).sendKeys("Todd");
    //        element(by.model('registerUser.lastName')).sendKeys("Todd");
    //
    //
    //    //Now submit the registration data.
    //    element.all(by.id('loginRegistrationRegisterButton')).first().click();
    //
    //
    //    //Expect to see the toast.
    //
    //    expect(element(by.id('registrationAcceptedText')).isPresent()).toBe(true);
    //
    //
    //
    //});



    //it('Should get warning message when trying to register with already existing name', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //
    //
    //    // element.all(by.id('loginSuccessButton')).first().click();
    //
    //
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
    //    //Furnish out the registration page.
    //    element(by.model('registerUser.email')).sendKeys("testEmail@email.ca");
    //    element(by.model('registerUser.password')).sendKeys("Todd");
    //    element(by.model('registerUser.firstName')).sendKeys("Todd");
    //    element(by.model('registerUser.lastName')).sendKeys("Todd");
    //
    //
    //    //Now submit the registration data.
    //    element.all(by.id('loginRegistrationRegisterButton')).first().click();
    //
    //
    //    //Expect to see the toast.
    //
    //    expect(element(by.id('registrationAcceptedText')).isPresent()).toBe(false);
    //    expect(element(by.id('invalidRegistrationButtonShown')).isPresent()).toBe(true);
    //
    //    //invalidRegistrationButtonShown
    //
    //});






    //it('Admin should be able to navigate to administrator panel', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //
    //
    //    // element.all(by.id('loginSuccessButton')).first().click();
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //});

        //it('Should be able to log out', function(){
        //    browser.get('http://localhost:5000/search');
        //    element(by.id('theMainLoginButton')).click();
        //
        //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
        //    element.all(by.id('loginSuccessButton')).first().click();
        //    element.all(by.id('theMainLogoutButton')).first().click();
        //
        //
        //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
        //
        //    //loginSuccessButton
        //
        //    ////Enter data.
        //    //element(by.model('loginUser.email')).sendKeys("Todd");
        //    //element(by.model('loginUser.password')).sendKeys("Todd");
        //    //
        //    ////Check fields before hitting cancel button.
        //    //expect(element(by.model('loginUser.email')).getAttribute('value')).toEqual("Todd");
        //    //expect(element(by.model('loginUser.password')).getAttribute('value')).toEqual("Todd");
        //
        //
        //});

    //it('Adminpanel should have all notifications button', function(){
    //
    //    browser.get('http://localhost:5000/search');
    //
    //
    //    // element.all(by.id('loginSuccessButton')).first().click();
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelAllButton')).isPresent()).toBe(true);
    //
    //});

    //it('Adminpanel should have a person notifications button', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelPersonsButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should have a adminPanelMentorshipsButton notifications button', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelMentorshipsButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should have a adminPanelSupervisionsButton notifications button', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelSupervisionsButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should have a adminPanelUserManagementButton notifications button', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelUserManagementButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should show AdminPanelPersonNotificationsGeneral', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('AdminPanelPersonNotificationsGeneral')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Adminpanel should show AdminPanelMentorshipNotificationsGeneral', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('AdminPanelMentorshipNotificationsGeneral')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Adminpanel should show AdminPanelSupervisionNotificationsGeneral', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('AdminPanelSupervisionNotificationsGeneral')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //it('Adminpanel should have a persons notification', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualPersonNotification')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should have a mentorship notification', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualMentorshipNotification')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel should have a supervision notification', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //});
    //
    //
    //
    //it('Adminpanel should have a persons notification position/name text should be correct', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonPositionAndName')).getText()).toEqual("professor steven myers");
    //
    //});
    //
    //
    //it('Adminpanel should have a persons notification institution text should be correct', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonInstitution')).getText()).toEqual("university of alberta");
    //
    //});
    //
    //it('Adminpanel should have a persons notification box with a view details buttont', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel clicking view detail of persons notification should navigate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //    element.all(by.id('adminPanelPersonViewDetailButton')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //    browser.get('http://localhost:5000/search');
    //    element(by.id('theMainLoginButton')).click();
    //
    //    expect(element(by.id('userDialog')).isPresent()).toBe(true);
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //});


    //
    ///** Admin panel test for the mentorship notifications **/
    //
    //it('Adminpanel should have a persons notification position/name text should be correct', function(){
    //    browser.get('http://localhost:5000/search');
    //
    //
    //    // element.all(by.id('loginSuccessButton')).first().click();
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualMentorshipNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipMentorName')).getText()).toEqual("x mentor");
    //
    //});
    //
    //it('Adminpanel mentorship notification person name should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel mentorship notification mentor name should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipMentoredPersonName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipMentoredPersonName')).getText()).toEqual("mentored by x");
    //
    //});
    //
    //it('Adminpanel mentorship notification institution should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipInstitutionName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipInstitutionName')).getText()).toEqual("carlsberg laboratory");
    //
    //});
    //
    //
    //it('Adminpanel mentorship notification years should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipInstitutionName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelMentorshipYearsName')).getText()).toEqual("1999 - 2001");
    //
    //});
    //
    //
    //
    //it('Adminpanel should have a mentorships notification box with a view details buttont', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('adminPanelViewDetailButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Adminpanel clicking view detail of persons notification should navigate', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //
    //    element.all(by.id('adminPanelViewDetailButton')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //
    //
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //});
    //
    //it('Should be able to log out from the admin panel', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //});


    /** Checking admin panel Supervision notifications **/
    //
    //it('Admin panel supervision notification person name should match ', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //        //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //
    //    //adminPanelSupervisionPersonName
    //    expect(element(by.id('adminPanelSupervisionPersonName')).getText()).toEqual("y supervisor");
    //
    //});
    //
    //it('Adminpanel supervision notification supervisor name should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //    //adminPanelSupervisionSupervisorName
    //    expect(element(by.id('adminPanelSupervisionSupervisorName')).getText()).toEqual("supervised by y");
    //});
    //
    //it('Adminpanel supervision notification supervisor name should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //    //adminPanelSupervisionSupervisorName
    //    expect(element(by.id('adminPanelSupervisionInstitutionName')).getText()).toEqual("johns hopkins university");
    //});
    //
    //it('Adminpanel supervision notification degree type should be accurate', function(){
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPanelPersonViewDetailButton')).isPresent()).toBe(true);
    //
    //    //adminPanelSupervisionSupervisorName
    //    expect(element(by.id('adminPanelSupervisionDegreeType')).getText()).toEqual("masters - 2050");
    //});
    //
    //it('Adminpanel clicking view detail of supervision notification should navigate', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //
    //    element.all(by.id('adminPanelClickSupervisionViewDetailButton')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //
    //
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //});


    /** Now checking out view person detail page from administrator page **/
    //it('Get to view person detail page from search screen. ', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //        //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //
    //
    //    element.all(by.id('adminPanelPersonViewDetailButton')).first().click();
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //});
    //
    //
    //it('Check that the approve button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonApproveButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the reject button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonRejectButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the full details is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonFullDetailsOnlyButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    //it('Check that the adminPersonPostDocsOnlyDetailsButton button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonPostDocsOnlyDetailsButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    //it('Check that the adminPersonMentoredOnlyDetailsButton button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredOnlyDetailsButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the adminPersonDegreesOnlyDetailsButton button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonDegreesOnlyDetailsButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the adminPersonSupervisedOnlyDetailsButtonn button is present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonSupervisedOnlyDetailsButton')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the adminPersonNameName is correct and present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonNameName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPersonNameName')).getText()).toEqual("STEVEN MYERS");
    //
    //
    //});
    //
    //it('Check that the adminPersonPosition is correct and present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonPosition')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPersonPosition')).getText()).toEqual("PROFESSOR");
    //
    //
    //});
    //
    //it('Check that the adminPersonPosition is correct and present on the screen. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminPersonInstitution')).getText()).toEqual("UNIVERSITY OF ALBERTA");
    //
    //
    //});
    //
    //
    //it('Check that postdocs section is displayed. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonPostDocsSection')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that postdocs section is displayed. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonSupervisorsSection')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that postdocs section is displayed. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonSupervisedSection')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that postdocs section is displayed. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that viewPagePostdocsName2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsName2')).getText()).toEqual("university of alberta");
    //
    //
    //});
    //
    //
    //
    //it('Check that viewPagePostdocsMentorName2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).getText()).toEqual("mentored by steve's mentor");
    //
    //
    //});
    //
    //
    //it('Check that viewPagePostdocsName is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).getText()).toEqual("mentored by steve's mentor");
    //
    //
    //});
    //
    //
    ///**
    // * Supervised section of admin person view details page.
    // */
    //it('Check that viewPageSupervisedCardInfo2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).getText()).toEqual("steve supervised");
    //
    //
    //});
    //
    //it('Check thatviewPageSupervisedInstitution2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedInstitution2')).getText()).toEqual("university of alberta");
    //
    //
    //});
    //
    //it('Check that viewPageSupervisedDegreeType2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).getText()).toEqual("phd");
    //
    //
    //});
    //
    //
    //it('Check that viewPageSupervisedYear2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedYear2')).getText()).toEqual("2030");
    //
    //
    //});
    //
    ///**
    // * Supervised section of admin mentored view details page.
    // */
    //
    //
    //it('Check that viewPageMentoredName2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('adminPersonMentoredSection')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredName2')).getText()).toEqual("steve's mentored");
    //
    //
    //});
    //
    //it('Check that viewPageMentoredYears2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredYears2')).getText()).toEqual("2031 - 2032");
    //
    //
    //});
    //
    //it('Check that viewPageMentoredInstitution2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).getText()).toEqual("university of alberta");
    //
    //
    //});
    //
    ///**
    // * Postdocs section of admin mentored view details page.
    // */
    //it('Check that viewPageMentoredInstitution2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).getText()).toEqual("university of alberta");
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});


    /**
     * admin mentorship notification view details page tests
     */

    //
    ///** Now checking out view detail mentorship detail page from administrator page **/
    //it('Get to view person detail page from search screen. ', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //
    //
    //    element.all(by.id('adminPanelViewDetailButton')).first().click();
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //});
    //
    //
    ///**
    // * Check interactable elements
    // */
    //it('Check that adminMentorshipDetailAcceptButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailAcceptButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailRejectButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailRejectButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailAllDetailsButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailAllDetailsButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailMentorOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailMentorOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailMentoredOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailMentoredOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailSupervisorOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailSupervisorOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailSupervisedOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailSupervisedOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    ////adminMentorshipDetailPersonName
    //
    //it('Check that adminMentorshipDetailPersonName is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailPersonName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailPersonName')).getText()).toEqual("x mentor");
    //
    //
    //});
    //
    //
    //it('Check that adminMentorshipDetailPersonPosition is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailPersonPosition')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailPersonPosition')).getText()).toEqual("professor");
    //
    //
    //});
    //
    //
    //it('Check that adminMentorshipDetailPersonPosition is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailPersonInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailPersonInstitution')).getText()).toEqual("university of alberta");
    //
    //
    //});
    //
    //
    //it('Check that adminMentorshipDetailMenteeName is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailMenteeName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailMenteeName')).getText()).toEqual("mentored by x");
    //
    //
    //});
    //
    //it('Check that adminMentorshipDetailMenteePosition is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailMenteePosition')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailMenteePosition')).getText()).toEqual("professor");
    //
    //
    //});
    //
    //it('Check that adminMentorshipDetailMenteeInstitution is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('adminMentorshipDetailMenteeInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminMentorshipDetailMenteeInstitution')).getText()).toEqual("university of alberta");
    //
    //
    //});
    //
    //
    //it('Check that there is a visible mentored section. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredsBox')).getText()).toEqual("Mentored");
    //
    //
    //});
    //
    //
    //it('Check that the data in viewPageMentoredName2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredName2')).getText()).toEqual("mentored by x");
    //
    //
    //});
    //
    //
    //it('Check that the data in viewPageMentoredYears2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredYears2')).getText()).toEqual("1999 - 2001");
    //
    //
    //});
    //
    //it('Check that the data in viewPageMentoredInstitution2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageMentoredInstitution2')).getText()).toEqual("carlsberg laboratory");
    //
    //
    //});
    //
    //
    //it('Check that there is a visible postdocs section. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsBox')).getText()).toEqual("Postdocs");
    //
    //
    //});
    //
    //it('Check that the data in viewPagePostdocsName2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsName2')).getText()).toEqual("carlsberg laboratory");
    //
    //
    //});
    //
    //it('Check that the data in viewPagePostdocsName2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsYears2')).getText()).toEqual("1999 - 2001");
    //
    //
    //});
    //
    //it('Check that the data in viewPagePostdocsName2 is present and correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).getText()).toEqual("mentored by x mentor");
    //
    //
    //});
    //
    ///** Now test hitting postdocs only button **/
    //
    //it('Check that the hitting postdocs only button hides the other info. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailMentorOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(false);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(true);
    //
    //
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).getText()).toEqual("mentored by x mentor");
    //
    //
    //});
    //
    //it('Check that the hitting Full details button only button hides no information. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(true);
    //
    //
    //
    //    expect(element(by.id('viewPagePostdocsMentorName2')).getText()).toEqual("mentored by x mentor");
    //
    //
    //});
    //
    //it('Check that the hitting Mentored details button only button hides information. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailMentoredOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(false);
    //
    //
    //
    //
    //
    //});
    //
    //it('Check that the hitting all button again after mentored button still works. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    //it('Check that the hitting degrees button works. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailSupervisorOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(false);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(false);
    //
    //
    //});
    //
    //it('Check that the hitting degrees button works. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailSupervisedOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(false);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(false);
    //
    //
    //});
    //
    //it('Check that the hitting all button again after mentored button still works. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageMentoredsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageMentoredInstitution2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPagePostdocsBox')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsName2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsYears2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPagePostdocsMentorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    ///**
    // * Check that we can still log out
    // */
    //it('Check that we can still log out from mentorship detail. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/mentorshipNotification/mentor/15/mentee/16/mentorship/9');
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});

    /** Now checking out view person detail page from administrator page **/
    //it('Get to view person detail page from search screen. ', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //        //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //
    //
    //    element.all(by.id('adminPanelClickSupervisionViewDetailButton')).first().click();
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //});
    //
    //
    ///**
    // * Check interactable elements
    // */
    //it('Check that adminMentorshipDetailAcceptButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailAcceptButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailRejectButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailRejectButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailAllDetailsButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailAllDetailsButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailMentorOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailMentorOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailMentoredOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailMentoredOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailSupervisorOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailSupervisorOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    //it('Check that adminMentorshipDetailSupervisedOnlyButton is displayed and the information is correct. ', function() {
    //
    //    expect(element(by.id('adminMentorshipDetailSupervisedOnlyButton')).isPresent()).toBe(true);
    //
    //});
    //
    ////adminMentorshipDetailPersonName
    //
    //it('Check that adminSupervisionDetailedName is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedName')).getText()).toEqual("y supervisor");
    //
    //
    //});
    //
    //
    //it('Check that adminSupervisionDetailedPosition is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedPosition')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedPosition')).getText()).toEqual("professor");
    //
    //
    //});
    //
    //
    //it('Check that adminSupervisionDetailedInstitution is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedInstitution')).getText()).toEqual("university of arkansas");
    //
    //
    //});
    //
    //
    //it('Check that adminSupervisionDetailedSupervisedName is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedName')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedName')).getText()).toEqual("supervised by y");
    //
    //
    //});
    //
    //it('Check that adminSupervisionDetailedSupervisedPosition is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedPosition')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedPosition')).getText()).toEqual("professor");
    //
    //
    //});
    //
    //it('Check that adminSupervisionDetailedSupervisedInstitution is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedInstitution')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('adminSupervisionDetailedSupervisedInstitution')).getText()).toEqual("carlsberg laboratory");
    //
    //
    //});
    //
    ///**
    // * Now delving into details of the admin panel supervision view details supervised card.
    // */
    //
    //it('Check that viewPageSupervisedCardInfo2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).getText()).toEqual("supervised by y");
    //
    //
    //});
    //
    //
    //it('Check that viewPageSupervisedInstitution2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedInstitution2')).getText()).toEqual("johns hopkins university");
    //
    //
    //});
    //
    //
    //it('Check that viewPageSupervisedDegreeType2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).getText()).toEqual("masters");
    //
    //
    //});
    //
    //it('Check that viewPageSupervisedYear2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedYear2')).getText()).toEqual("2050");
    //
    //
    //});
    //
    //
    //it('Check tha viewPageDegreesBox is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageDegreesBox')).isPresent()).toBe(true);
    //
    //    //expect(element(by.id('viewPageSupervisedYear2')).getText()).toEqual("2050");
    //
    //
    //});
    //
    //
    //it('Check that viewPageDegreesDegreeType2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).getText()).toEqual("masters");
    //
    //
    //});
    //
    //it('Check that viewPageSupervisedYear2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedYear2')).getText()).toEqual("2050");
    //
    //
    //});
    //
    //it('Check that viewPageSupervisedInstitution2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedInstitution2')).getText()).toEqual("johns hopkins university");
    //
    //
    //});
    //
    //it('Check that viewPageSupervisedCardInfo2 is displayed and the information is correct. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(true);
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).getText()).toEqual("supervised by y");
    //
    //
    //});
    //
    ///**
    // * Now test the visibility buttons.
    // */
    //
    //it('Check that the hitting all button again shows all data. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    //it('Check that the hitting mentored button hides all data. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    element.all(by.id('adminMentorshipDetailMentoredOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(false);
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeYear2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageDegreesSupervisorName2')).isPresent()).toBe(false);
    //
    //
    //});
    //
    //
    //it('Check that the hitting the degree button hides all non-degree data. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    element.all(by.id('adminMentorshipDetailSupervisorOnlyButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(false);
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(false);
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the hitting all button again shows all data again. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //it('Check that the hitting all button again shows all data again. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    element.all(by.id('adminMentorshipDetailAllDetailsButton')).first().click();
    //
    //
    //    expect(element(by.id('viewPageSupervisedCardInfo2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageSupervisedYear2')).isPresent()).toBe(true);
    //
    //
    //    expect(element(by.id('viewPageDegreesDegreeType2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeYear2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesDegreeInstitution2')).isPresent()).toBe(true);
    //    expect(element(by.id('viewPageDegreesSupervisorName2')).isPresent()).toBe(true);
    //
    //
    //});
    //
    //
    //
    ///**
    // * Check that we can still log out
    // */
    //it('Check that we can still log out from mentorship detail. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});

    /**
     * Test rejecting a piece of data, NOTE: DATABASE BUT BE RELOADED USING THE SCRIPT OR THIS WILL CAUSE OTHER
     * TESTS TO FAIL IF YOU TRY AND RUN THIS AGAIN. THIS CHANGE STAYS. REJECT CAUSES A PERMANENT CHANGE FROM
     * THIS POINT ONWARDS IN THE TEST DATA.
     *
     * PLEASE DO NOT FORGET TO DO THIS! THIS WILL CAUSE ERRORS IF NOT HANDLED.
     */


    //it('Relog as admin, and reject the supervision change. ', function() {
    //
    //
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //        //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(true);
    //
    //
    //
    //    element.all(by.id('adminPanelClickSupervisionViewDetailButton')).first().click();
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/supervisionNotification/supervisor/17/supervised/18/supervision/7');
    //
    //
    //    //Now click the reject button
    //
    //    element.all(by.id('adminMentorshipDetailRejectButton')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //});
    //
    ///**
    // * Now go and check that the supervision data that was rejected is actually removed.
    // */
    //
    //it('Test that the rejected data is no longer there... ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(false);
    //
    //});
    //
    //it('Check that we can still log out after rejecting detail. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});
    //
    //
    ///**
    // * Test that logging back in, the change in the data (of the rejection) persists
    // */
    //
    //it('Relog as admin, and reject the supervision change. ', function() {
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualSupervisionNotification')).isPresent()).toBe(false);
    //
    //});
    //
    ///**
    // * Test rejecting a piece of data, NOTE: DATABASE BUT BE RELOADED USING THE SCRIPT OR THIS WILL CAUSE OTHER
    // * TESTS TO FAIL IF YOU TRY AND RUN THIS AGAIN. THIS CHANGE STAYS. REJECT CAUSES A PERMANENT CHANGE FROM
    // * THIS POINT ONWARDS IN THE TEST DATA.
    // *
    // * PLEASE DO NOT FORGET TO DO THIS! THIS WILL CAUSE ERRORS IF NOT HANDLED.
    // */
    //
    ///**
    // * Now go and accept the person notification
    // */
    //
    //it('Test that we can accept the person notification, that it is there and the webpage is correct ', function() {
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualPersonNotification')).isPresent()).toBe(true);
    //
    //
    //
    //    element.all(by.id('adminPanelPersonViewDetailButton')).first().click();
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/personNotification/person/11');
    //
    //
    //    //Now click the reject button
    //
    //    element.all(by.id('adminPersonApproveButton')).first().click();
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //adminPersonApproveButton
    //});
    //
    //
    ///**
    // * Check that it is gone and accepted
    // */
    //
    //it('Test that the accepted data is no longer there... ', function() {
    //
    //
    //    //expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualPersonNotification')).isPresent()).toBe(false);
    //
    //});
    //
    //it('Check that we can still log out after accepting detail. ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});
    //
    //
    //
    ///**
    // * Check that it is gone and accepted
    // */
    //
    //it('Test that the accepted data is no longer there... ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualPersonNotification')).isPresent()).toBe(false);
    //
    //});
    //
    //
    ///**
    // * Test rejecting a piece of data, NOTE: DATABASE BUT BE RELOADED USING THE SCRIPT OR THIS WILL CAUSE OTHER
    // * TESTS TO FAIL IF YOU TRY AND RUN THIS AGAIN. THIS CHANGE STAYS. REJECT CAUSES A PERMANENT CHANGE FROM
    // * THIS POINT ONWARDS IN THE TEST DATA.
    // *
    // * PLEASE DO NOT FORGET TO DO THIS! THIS WILL CAUSE ERRORS IF NOT HANDLED.
    // */
    //
    //
    ///**
    // * Check that the acceptance persisted.
    // */
    //
    //it('Test that the accepted data is no longer there... ', function() {
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
    //
    //    element.all(by.id('adminOnlyButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //    //http://localhost:5000/admin
    //
    //    expect(element(by.id('individualPersonNotification')).isPresent()).toBe(false);
    //
    //});
    //
    //it('Check that we can still log out ', function() {
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');
    //
    //    //Log out
    //    element.all(by.id('loginSuccessButton')).first().click();
    //    element.all(by.id('theMainLogoutButton')).first().click();
    //
    //
    //    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');
    //
    //
    //});


    /**
     *  From this point forward: NOTE: DATABASE BUT BE RELOADED USING THE SCRIPT OR THIS WILL CAUSE OTHER
     * TESTS TO FAIL IF YOU TRY AND RUN THIS AGAIN. THIS CHANGE STAYS. REJECT CAUSES A PERMANENT CHANGE FROM
     * THIS POINT ONWARDS IN THE TEST DATA.
     *
     * PLEASE DO NOT FORGET TO DO THIS! THIS WILL CAUSE ERRORS IF NOT HANDLED.
     */

    it('Not logged in user should not see submit button. ', function() {

        browser.get('http://localhost:5000/search');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');

        expect(element(by.id('mainHeaderSubmitNewSubmissionButton')).isPresent()).toBe(true);


        //mainHeaderSubmitNewSubmissionButton

    });


    /**
     * Start of submit page (Perhaps comment this out for test demos?) :/ That click box bug is quite bad...
     */

    it('Test that a logged in user can see the submit button. ', function() {

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


        //Submission button should be there.
        expect(element(by.id('mainHeaderSubmitNewSubmissionButton')).isPresent()).toBe(true);
    });

    it('Test the navigation to the submit page. ', function() {

        browser.get('http://localhost:5000/search');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/search');


        expect(element(by.id('mainHeaderSubmitNewSubmissionButton')).isPresent()).toBe(true);

        //Click the newsubmission button.
        element(by.id('mainHeaderSubmitNewSubmissionButton')).click();


        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        //mainHeaderSubmitNewSubmissionButton

    });

    /**
     * Check interactables of the submit page are all there.
     */


    //firstName

    it('Check the firstname angular model is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.model('firstName')).isPresent()).toBe(true);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the lastname angular model is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.model('lastName')).isPresent()).toBe(true);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the current position title angular model is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.model('currentPositionTitle')).isPresent()).toBe(true);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });


    it('Check the current currentInstitutionName angular model is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.model('currentInstitutionName')).isPresent()).toBe(true);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the expand postdocs section button is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandPostDocInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizePostDocInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the "expandDegreeInfoButton section button is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandDegreeInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeDegreeInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the "expandSuperDocsInfoButton section button is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandSuperDocsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeSuperDocsInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Check the "expandSuperDegsInfoButton section button is there.. ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandSuperDegsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeSuperDegsInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

    });

    it('Test the expand postdocs button works ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandPostDocInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizePostDocInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        element(by.id('expandPostDocInfoButton')).click();

        expect(element(by.id('minimizePostDocInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('expandPostDocInfoButton')).isPresent()).toBe(false);

    });

    it('Test the expand Degree button works ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandDegreeInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeDegreeInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        element(by.id('expandDegreeInfoButton')).click();

        expect(element(by.id('minimizeDegreeInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('expandDegreeInfoButton')).isPresent()).toBe(false);

    });

    it('Test the expand SuperDocs button works ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandSuperDocsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeSuperDocsInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        element(by.id('expandSuperDocsInfoButton')).click();

        expect(element(by.id('minimizeSuperDocsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('expandSuperDocsInfoButton')).isPresent()).toBe(false);

    });


    it('Test the expand SuperDegs button works ', function() {

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        expect(element(by.id('expandSuperDegsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('minimizeSuperDegsInfoButton')).isPresent()).toBe(false);

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/submit');

        element(by.id('expandSuperDegsInfoButton')).click();

        expect(element(by.id('minimizeSuperDegsInfoButton')).isPresent()).toBe(true);
        expect(element(by.id('expandSuperDegsInfoButton')).isPresent()).toBe(false);

    });

    /**
     * Postdoc appointments section analysis
     */

    it('Test the pdstartyear field existss ', function() {

        expect(element(by.model('pdStartYear')).isPresent()).toBe(true);

    });

    it('Test the pdendyear field existss ', function() {


        expect(element(by.model('pdEndYear')).isPresent()).toBe(true);

    });


    it('Test the pdsupervisor field existss ', function() {


        expect(element(by.model('pdSupervisor')).isPresent()).toBe(true);
    });

    it('Test the pdinstitution field existss ', function() {


        expect(element(by.model('pdInstitution')).isPresent()).toBe(true);
    });



    it('Test putting text into the pdstartyear field ', function() {


        element(by.model('pdStartYear')).sendKeys("2016");

        expect(element(by.model('pdStartYear')).getAttribute('value')).toEqual("2016");
    });


    it('Test putting text into the pdendyear field ', function() {


        element(by.model('pdEndYear')).sendKeys("999999");

        expect(element(by.model('pdEndYear')).getAttribute('value')).toEqual("999999");
    });

    it('Test putting text into the pdsupervisor field ', function() {


        element(by.model('pdSupervisor')).sendKeys("John Doe");

        expect(element(by.model('pdSupervisor')).getAttribute('value')).toEqual("John Doe");
    });

    it('Test putting text into the pdinstitution field ', function() {


        element(by.model('pdInstitution')).sendKeys("test university");

        expect(element(by.model('pdInstitution')).getAttribute('value')).toEqual("test university");
    });


    /**
     * DegreeInformation section analysis
     */

    it('Test the ditype field existss ', function() {

        expect(element(by.model('diType')).isPresent()).toBe(true);

    });

    it('Test the diyear field existss ', function() {

        expect(element(by.model('diYear')).isPresent()).toBe(true);

    });

    it('Test the disupervisor field existss ', function() {

        expect(element(by.model('diSupervisor')).isPresent()).toBe(true);

    });

    it('Test the diinstitution field existss ', function() {

        expect(element(by.model('diInstitution')).isPresent()).toBe(true);

    });




    it('Test functioning input of diyear input text field. ', function() {

        expect(element(by.model('diYear')).isPresent()).toBe(true);






        element(by.model('diYear')).sendKeys("2979");

        expect(element(by.model('diYear')).getAttribute('value')).toEqual("2979");

    });



    it('Test putting text into the diSupervisor field ', function() {


        element(by.model('diSupervisor')).sendKeys("John NotDoe");

        expect(element(by.model('diSupervisor')).getAttribute('value')).toEqual("John NotDoe");
    });


    it('Test putting text into the diInstitution field ', function() {


        element(by.model('diInstitution')).sendKeys("testUniversity2");

        expect(element(by.model('diInstitution')).getAttribute('value')).toEqual("testUniversity2");
    });

    /**
     * Postdocs this person supervised section
     */
    it('Test the superDocNameOfPerson field existss ', function() {

        expect(element(by.model('superdocNameOfPerson')).isPresent()).toBe(true);

    });

    /**
     * WARNING: This test is extremely tempermental, sometimes the test fails because the webpage doesn't properly
     * click the selection boxes. Frustrating.
     */
    it('Test functioning input of ditype ', function() {

        expect(element(by.model('diType')).isPresent()).toBe(true);

        element(by.model('diType')).click();

        element(by.id('mdOpenDoctorate')).click();
        //element(by.id('mdOpenDoctorate')).click();

        //expect(element(by.model('diType')).getAttribute('value')).toEqual("Doctorate");

    });


    it('Test the superDocStartYear field existss ', function() {

        expect(element(by.model('superDocStartYear')).isPresent()).toBe(true);

    });

    it('Test the superDocEndYear field existss ', function() {

        expect(element(by.model('superDocEndYear')).isPresent()).toBe(true);

    });

    it('Test the superDocInstitution field existss ', function() {

        expect(element(by.model('superDocInstitution')).isPresent()).toBe(true);

    });


    it('Test putting text into the superdocNameOfPerson field ', function() {


        element(by.model('superdocNameOfPerson')).sendKeys("NotJohnDoe Again");

        expect(element(by.model('superdocNameOfPerson')).getAttribute('value')).toEqual("NotJohnDoe Again");
    });

    it('Test putting text into the superDocStartYear field ', function() {


        element(by.model('superDocStartYear')).sendKeys("1291892");

        expect(element(by.model('superDocStartYear')).getAttribute('value')).toEqual("1291892");
    });

    it('Test putting text into the superDocEndYear field ', function() {


        element(by.model('superDocEndYear')).sendKeys("1292");

        expect(element(by.model('superDocEndYear')).getAttribute('value')).toEqual("1292");
    });

    it('Test putting text into the superDocInstitution field ', function() {


        element(by.model('superDocInstitution')).sendKeys("magicalTestUniversity");

        expect(element(by.model('superDocInstitution')).getAttribute('value')).toEqual("magicalTestUniversity");
    });


    /**
     * People who this person supervised their DEGREES -- SUPERDEG SECTION
     */
    it('Test the superDegNameOfPerson field existss ', function() {

        expect(element(by.model('superDegNameOfPerson')).isPresent()).toBe(true);

    });

    it('Test the superDegCurrPosition field existss ', function() {

        expect(element(by.model('superDegCurrPosition')).isPresent()).toBe(true);

    });

    it('Test the superDegCurrInst field existss ', function() {

        expect(element(by.model('superDegCurrInst')).isPresent()).toBe(true);

    });


    it('Test the superDegDegType field existss ', function() {

        expect(element(by.model('superDegDegType')).isPresent()).toBe(true);

    });

    it('Test the superDegYear field existss ', function() {

        expect(element(by.model('superDegYear')).isPresent()).toBe(true);

    });

    it('Test the superDegInst field existss ', function() {

        expect(element(by.model('superDegInst')).isPresent()).toBe(true);

    });






    it('Test putting text into the superDegNameOfPerson field ', function() {


        element(by.model('superDegNameOfPerson')).sendKeys("Johnny Doe");

        expect(element(by.model('superDegNameOfPerson')).getAttribute('value')).toEqual("Johnny Doe");
    });

    it('Test putting text into the diInstitution field ', function() {


        element(by.model('superDegCurrPosition')).sendKeys("Professor");

        expect(element(by.model('superDegCurrPosition')).getAttribute('value')).toEqual("Professor");
    });

    it('Test putting text into the superDegCurrInst field ', function() {


        element(by.model('superDegCurrInst')).sendKeys("auniversity");

        expect(element(by.model('superDegCurrInst')).getAttribute('value')).toEqual("auniversity");
    });

    /**
     * WARNING: This test is extremely tempermental, sometimes the test fails because the webpage doesn't properly
     * click the selection boxes. Frustrating.
     */
    it('Test functioning input of ditype ', function() {

        expect(element(by.model('superDegDegType')).isPresent()).toBe(true);

        element(by.model('superDegDegType')).click();

        element(by.id('mdOpenSuperDoctorate')).click();
        //element(by.id('mdOpenDoctorate')).click();

        //expect(element(by.model('diType')).getAttribute('value')).toEqual("Doctorate");

    });

    it('Test putting text into the superDegYear field ', function() {


        element(by.model('superDegYear')).sendKeys("1989");

        expect(element(by.model('superDegYear')).getAttribute('value')).toEqual("1989");
    });


    it('Test putting a value into the superdeg inst field. ', function() {



        element(by.model('superDegInst')).sendKeys("uofa");

        expect(element(by.model('superDegInst')).getAttribute('value')).toEqual("uofa");

    });

    /**
     * Now check "submitting" a postdoc appointment for it's consistency.
     */


    it('Test submitting a postdoc appointment', function() {
        
        //expect(element(by.model('postDocSubmittedInfoStartYear')).getAttribute('value')).toEqual("2016");

        expect(element(by.model('pdEndYear')).getAttribute('value')).toEqual("999999");


        expect(element(by.model('pdSupervisor')).getAttribute('value')).toEqual("John Doe");

        expect(element(by.model('pdInstitution')).getAttribute('value')).toEqual("test university");

        //postDocAddSubmissionButton

        element(by.id('postDocAddSubmissionButton')).click();
        browser.waitForAngular();


    });


    it('Test submitting a degree instance', function() {

        //expect(element(by.model('postDocSubmittedInfoStartYear')).getAttribute('value')).toEqual("2016");

        expect(element(by.model('diType')).isPresent()).toBe(true);

        expect(element(by.model('diYear')).isPresent()).toBe(true);

        expect(element(by.model('diSupervisor')).isPresent()).toBe(true);

        expect(element(by.model('diInstitution')).isPresent()).toBe(true);


        //postDocAddSubmissionButton

        element(by.id('diSubmitButton')).click();
        browser.waitForAngular();


    });


    it('Test submitting a superdoc instance', function() {



        expect(element(by.model('superdocNameOfPerson')).getAttribute('value')).toEqual("NotJohnDoe Again");

        expect(element(by.model('superDocStartYear')).getAttribute('value')).toEqual("1291892");

        expect(element(by.model('superDocEndYear')).getAttribute('value')).toEqual("1292");

        expect(element(by.model('superDocInstitution')).getAttribute('value')).toEqual("magicalTestUniversity");


        //postDocAddSubmissionButton

        element(by.id('addSuperdocinstanceButton')).click();
        browser.waitForAngular();


    });



    it('Test submitting a superdeg instance', function() {


        expect(element(by.model('superDegNameOfPerson')).getAttribute('value')).toEqual("Johnny Doe");

        expect(element(by.model('superDegCurrPosition')).getAttribute('value')).toEqual("Professor");

        expect(element(by.model('superDegCurrInst')).getAttribute('value')).toEqual("auniversity");

        expect(element(by.model('superDegYear')).getAttribute('value')).toEqual("1989");

        element(by.id('addSuperDegInstanceButton')).click();
        browser.waitForAngular();


    });


    it('Test hitting the ultimate submit (all page submit) button prompts a firstname warning', function() {


        element(by.id('leUultimateSubmitButton')).click();
        browser.waitForAngular();


        expect(element(by.id('firstNameWarning')).isPresent()).toBe(true);
    });


    it('Test putting in a value for the first name', function() {





        element(by.model('firstName')).sendKeys("testFirstName");

        expect(element(by.model('firstName')).getAttribute('value')).toEqual("testFirstName");


    });


    it('Test hitting the ultimate submit (all page submit) button prompts a lastname warning', function() {


        element(by.id('leUultimateSubmitButton')).click();
        browser.waitForAngular();


        expect(element(by.id('lastNameWarning')).isPresent()).toBe(true);
    });



    it('Test putting in a value for the last name', function() {





        element(by.model('lastName')).sendKeys("testLastName");

        expect(element(by.model('lastName')).getAttribute('value')).toEqual("testLastName");


    });


    it('Test hitting the ultimate submit (all page submit) button prompts a currpositiontitle warning', function() {


        element(by.id('leUultimateSubmitButton')).click();
        browser.waitForAngular();


        expect(element(by.id('currPosTitleWarning')).isPresent()).toBe(true);
    });



    it('Test putting in a value for the currentposition name', function() {





        element(by.model('currentPositionTitle')).sendKeys("testCurrentPosition");

        expect(element(by.model('currentPositionTitle')).getAttribute('value')).toEqual("testCurrentPosition");


    });


    it('Test hitting the ultimate submit (all page submit) button prompts a currpositiontitle warning', function() {


        element(by.id('leUultimateSubmitButton')).click();
        browser.waitForAngular();


        expect(element(by.id('currInstNameWarning')).isPresent()).toBe(true);
    });


    it('Test putting in a value for the currentposition name', function() {





        element(by.model('currentInstitutionName')).sendKeys("testInstitutionName");

        expect(element(by.model('currentInstitutionName')).getAttribute('value')).toEqual("testInstitutionName");


    });

    it('Test hitting the ultimate submit button WILL submit the data!', function() {


        element(by.id('leUultimateSubmitButton')).click();
        browser.waitForAngular();


        expect(element(by.id('submitObjectSuccessWarning')).isPresent()).toBe(true);
    });


    /**
     * NOW NAVIGATE TO ADMIN PANEL AND EXAMINE IF THE NEW SUBMISSION IS ACTUALLY THERE OR NOT!
     */
    it('Test that the submitted data IS in the admin panel!!!!', function() {


        element(by.id('adminOnlyButton')).click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/admin');

    });








//        expect(element(by.id('viewPageTopBarInstitution')).getText()).toEqual("UNIVERSITY OF ALBERTA");

    //data.person.data.name


    /**
     * End of submit page (Perhaps comment this out for test demos?) :/ That click box bug is quite bad...
     */




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
