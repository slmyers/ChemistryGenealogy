/**
 * Protractor end to end testing for the search page functionality.
 *
 * @constructor
 */

// what is this???
var util = require('util');

describe('Search', function() {

    it('has a login button', function() {
      browser.get('http://localhost:5000/search');
      expect(element(by.id('theMainLoginButton')).isPresent()).toBe(true);
    });

    it('has a search bar', function(){
        browser.get('http://localhost:5000/search');
        expect(element(by.id('peopleSearchInput')).isPresent()).toBe(true);


    });

    it('The search bar can accept text input and retains it', function(){
        browser.get('http://localhost:5000/search');
        //Enter "Todd" into the search bar.
        element(by.id('peopleSearchInput')).sendKeys("Todd");

        //Check that the search bar has the correct name in itself.
        expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");

    });

    it('Has a data visualization', function(){
        browser.get('http://localhost:5000/search');
        expect(element(by.id('dataVis')).isPresent()).toBe(true);
    });


    it('Has the search options displayed', function(){
        browser.get('http://localhost:5000/search');
        //Enter "Todd" into the search bar.
        element(by.id('peopleSearchInput')).sendKeys("Todd");

        //Check that the search bar has the correct name in itself.
        expect(element(by.id('peopleSearchInput')).getAttribute('value')).toEqual("Todd");


        browser.waitForAngular();
        expect(element(by.id('searchResultsArray')).isPresent()).toBe(true);
        //searchResultsArray
    });

    it('Has a data visualization', function(){

    });


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
