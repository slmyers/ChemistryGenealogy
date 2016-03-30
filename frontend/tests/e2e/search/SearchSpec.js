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


    it('Should be able to register', function(){

        /** NOTE STRONGLY: ONCE THIS TEST IS RAN IT WILL ALWAYS ALWAYS ALWAYS FAIL. WHY? BECAUSE
         * THE DATABASE STILL MAINTAINS THE VALUE OF THE USER EMAIL USED HERE!
         *
         * SOLUTION:
         * MUST REFRESH DATABASE OR CHANGE THE NAME HERE OR YOU WILL RUN INTO THIS TEST FAILING!
         */
        browser.get('http://localhost:5000/search');


           // element.all(by.id('loginSuccessButton')).first().click();


            browser.get('http://localhost:5000/search');
            element(by.id('theMainLoginButton')).click();

            expect(element(by.id('userDialog')).isPresent()).toBe(true);

            element(by.id('loginRegisterButton')).click();
            expect(element(by.model('registerUser.email')).isPresent()).toBe(true);
            expect(element(by.model('registerUser.password')).isPresent()).toBe(true);
            expect(element(by.model('registerUser.firstName')).isPresent()).toBe(true);
            expect(element(by.model('registerUser.lastName')).isPresent()).toBe(true);


        //Furnish out the registration page.
            element(by.model('registerUser.email')).sendKeys("automatedTestasdsadSADASasdasds@autotests.ca");
            element(by.model('registerUser.password')).sendKeys("Todd");
            element(by.model('registerUser.firstName')).sendKeys("Todd");
            element(by.model('registerUser.lastName')).sendKeys("Todd");


        //Now submit the registration data.
        element.all(by.id('loginRegistrationRegisterButton')).first().click();


        //Expect to see the toast.

        expect(element(by.id('registrationAcceptedText')).isPresent()).toBe(true);



    });








    //1993 - 1995


    //viewPageMentoredYears

    //viewPageMentoredInstitution


//        expect(element(by.id('viewPageTopBarInstitution')).getText()).toEqual("UNIVERSITY OF ALBERTA");

    //data.person.data.name




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
