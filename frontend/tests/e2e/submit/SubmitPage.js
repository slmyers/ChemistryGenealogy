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
    this.ultimateSubmitButton = element(by.id(''));
    this.returnToSearchPage = element(by.id(''));

    //Misc Warnings
    this.firstNamewarning = element(by.id('firstNameWarning'));
    this.lastNameWarning = element(by.id('lastNameWarning');
    this.currentPositionWarning = element(by.id('currPosTitleWarning'));
    this.currentInstWarning = element(by.id('currInstNameWarning'));


    //Now after all that... the tests... -_-





};