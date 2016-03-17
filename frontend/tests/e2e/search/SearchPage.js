/**
 * Search PageObject for Protractor testing.
 *
 * Search View: search.html, the html file used for the core search page of the webapp.
 * Search bar however is located within main.html <-- Actually is in chemautoperson too x.x
 *
 * Autocompletion (associated with search bar) is located within the chemautoperson.html file.
 */

var SearchPage = function(){
    this.mainSearchBar = element(by.id('peopleSearch'));
    this.searchResultsArray = element(by.id('searchResultsArray'));
    this.searchDetailedInfoTarget = element(by.id('searchDetailedInfoTarget'));
    this.searchDetailedInfoMentors = element(by.id('searchDetailedInfoMentors'));
    this.searchDetailedInfoMentored = element(by.id('searchDetailedInfoMentored'));
    this.searchDetailedInfoSupervisors = element(by.id('searchDetailedInfoSupervisors'));
    this.searchDetailedInfoSupervised = element(by.id('searchDetailedInfoSupervised'));



    this.searchBarInputCheck = function(testExampleName){
        //Supply info to bar.
        this.mainSearchBar.sendKeys(testExampleName);

        //Check input
        expect(this.mainSearchBar.getText().toEqual(testExampleName));
    };

    this.testSearchNameOption = function(testExampleName){
        //Supply info to bar.
        this.mainSearchBar.sendKeys(testExampleName);

        //Wait for the browser to process
        browser.waitForAngular();

        //Check the basic output below to contain the name.
        expect(this.searchResultsArray.getText().toEqual(testExampleName));
    };

    /**
     * Hard coded for now, yes I know this is not good to hard code but tight on time.
     */
    this.testSearchTarget = function(){
        //Supply info to bar.
        this.mainSearchBar.sendKeys('david bundle');

        //Wait for the browser to process
        browser.waitForAngular();

        this.searchResultsArray.click();

        expect(this.searchDetailedInfoTarget.getText().toEqual('david bundle'));

    };


    /**
     * Hard coded for now, yes I know this is not good to hard code but tight on time.
     */
    this.testSearchMentors = function(){
        //Supply info to bar.
        this.mainSearchBar.sendKeys('david bundle');

        //Wait for the browser to process
        browser.waitForAngular();

        this.searchResultsArray.click();

        expect(this.searchDetailedInfoTarget.first.getText().toBe('raymond lemieux'));

    };

    this.testSearchMentored = function(){
        //Supply info to bar.
        this.mainSearchBar.sendKeys('david bundle');

        //Wait for the browser to process
        browser.waitForAngular();

        this.searchResultsArray.click();

        expect(this.searchDetailedInfoTarget.first.getText().toBe('todd lowary'));

    };

    this.testSearchSupervisors = function(){
        //Supply info to bar.
        this.mainSearchBar.sendKeys('david bundle');

        //Wait for the browser to process
        browser.waitForAngular();

        this.searchResultsArray.click();

        expect(this.searchDetailedInfoTarget.first.getText().toBe('james baddiley'));

    };


    this.testViewPageNavigation = function(){
        //Supply info to bar.
        this.mainSearchBar.sendKeys('david bundle');

        //Wait for the browser to process
        browser.waitForAngular();

        this.searchResultsArray.click();

        //Click what should be 'james baddiley'
        this.searchDetailedInfoTarget.first.click();

        //Test that this went to the expected URL.
        expect(browser.getCurrentUrl.toBe('http://localhost:5000/view/7'));

    };




    //
    //this.loginCancelFunction = function(testUserName, testUserPass){
    //    //Supply information
    //    //Test info
    //    //pass testPassword
    //    //usr 'testEmail@email.ca'
    //    this.loginUserName.sendKeys(testUserName);
    //    this.loginPassword.sendKeys(testUserPass);
    //
    //    //Click Cancel Button.
    //    this.loginCancelButton.click();
    //
    //    //Allow browser to work...
    //    browser.waitForAngular();
    //
    //    //Now confirm the cancel (by the login box going away). So the main login button should be displayed.
    //    expect(this.loginMainButton.isDisplayed());
    //
    //};






};
