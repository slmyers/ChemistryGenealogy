/**
 * Submit PageObject for Protractor testing.
 *
 * Submit View:  submit.html
 *
 */

var SearchPage = function() {

    //Putting the elements of the UI into variables associated with them.
    this.firstNameField = element(by.model('firstName'));
    this.lastNameField  = element(by.model('lastName'));
    this.currentPositionField = element(by.model('currentPositionTitle'));
    this.currentInstField = element(by.model('currentInstitutionName'));

    //Postdoc elements
    this.pdStartYearField = element(by.model('pdStartYear'));
    this.pdEndYearField = element(by.model('pdEndYear'));
    this.pdSuperNameField  = element(by.model('pdSupervisor'));
    this.pdInstitutionField = element(by.model('pdInstitution'));


    this.pdSubmitButton = element(by.id('pdSubmitButton'));
    this.pdRemoveButton = element(by.id('pdRemoveButton'));
    this.pdSubmittedItemArray = element(by.id('pdSubmittedItemArray'));

    //Degree Info elements
    this.degreeTypeField = element(by.model('diType'));
    this.dgYearField = element(by.model('diYear'));
    this.dgSuperField = element(by.model('diSupervisor'));
    this.dgInstField = element(by.model('diInstitution'));


    this.dgSubmitButton = element(by.id('diSubmitButton'));
    this.dgRemoveButton = element(by.id('diRemoveButton'));
    this.dgSubmittedItemArray  = element(by.id('diSubmittedItemArray'));

    //supervised postdoc fields (superdoc)
    this.superDocNameField = element(by.model('superdocNameOfPerson'));
    this.superDocStartYearField = element(by.model('superDocStartYear'));
    this.superDocEndYearField = element(by.model('superDocEndYear'));
    this.superDocInstField = element(by.model('superDocInstitution'));


    this.superDocSubmitButton = element(by.id('superDocSubmitButton'));
    this.superDocRemoveButton = element(by.id('superDocRemoveButton'));
    this.superDocSubmittedItemArray = element(by.id('superDocSubmittedItemArray'));

    //supervised degree fields (superdeg)
    this.superDegNamefield = element(by.model('superDegNameOfPerson'));

    this.superDegSubmitButton = element(by.id('superDegSubmitButton'));
    this.superDegRemoveButton = element(by.id('superDegRemoveButton '));
    this.supeDegSubmittedItemArray =  element(by.id('supeDegSubmittedItemArray'));

    //Misc Buttons on the bottom
    this.ultimateSubmitButton = element(by.id('leUultimateSubmitButton'));
    this.returnToSearchPage = element(by.id('leReturnToSearchPageButton'));

    //Misc Warnings
    this.firstNamewarning = element(by.id('firstNameWarning'));
    this.lastNameWarning = element(by.id('lastNameWarning'));
    this.currentPositionWarning = element(by.id('currPosTitleWarning'));
    this.currentInstWarning = element(by.id('currInstNameWarning'));


    //Now after all that... the tests... -_-



    //Now variables that will be used:
    //Yes, that is the alphabet... time restricted so I don't get the luxury of being fancy.
    var firstNameTest = "a";
    var lastNameTest = "b";
    var currPosTest = "c";
    var currInstTest = "d";
    var pdStartTest = "e";
    var pdEndTest = "f";
    var pdSuperNameTest = "g";
    var pdInstTest = "h";
    var dgTypeTest = "i";
    var dgYearTest = "j";
    var dgSuperTest = "k";
    var dgInstTest = "l";
    var sdocNameTest = "m";
    var sDocStartYearTest = "n";
    var sDocEndYearTest = "o";
    var sDocInstTest = "p";
    var sDegNameTest = "q";

    /**
     * Tests basic inputs for all things to see that they match what is expected.
     */
    this.testBasicInputs = function(firstNameTest, lastNameTest, currPosTest, currInstTest, pdStartTest, pdEndTest, pdSuperNameTest,
         pdInstTest, dgTypeTest, dgYearTest, dgSuperTest, dgInstTest, sdocNameTest, sDocStartYearTest, sDocEndYearTest,
         sDocInstTest, sDegNameTest){

        //Send all of this information into the data entry fields.
        this.firstNameField.sendKeys(firstNameTest);
        this.lastNameField.sendKeys(lastNameTest);
        this.currentPositionField.sendKeys(currPosTest);
        this.currentInstField.sendKeys(currInstTest);
        this.pdStartYearField.sendKeys(pdStartTest);
        this.pdEndYearField.sendKeys(pdEndTest);
        this.pdSuperNameField.sendKeys(pdSuperNameTest);
        this.pdInstitutionField.sendKeys(pdInstTest);
        this.degreeTypeField.sendKeys(dgTypeTest); //Error? Degree is in a drop list of choices, not a text field.
        this.dgYearField.sendKeys(dgYearTest);
        this.dgSuperField.sendKeys(dgSuperTest);
        this.dgInstField.sendKeys(dgInstTest);
        this.superDocNameField.sendKeys(sdocNameTest);
        this.superDocStartYearField.sendKeys(sDocStartYearTest);
        this.superDocEndYearField.sendKeys(sDocEndYearTest);
        this.superDocInstField.sendKeys(sDocInstTest);
        this.superDegNamefield.sendKeys(sDegNameTest);

    }




};