/**
 * Search Service
 *
 * Status: SERVICE
 * Associated files: vis controller
 *
 */


angular.module('chemGeno')
.service('searchService', function($q) {
      // source of mock data: https://github.com/401ChemistryGenealogy/ChemistryGenealogy/blob/master/sample_data/data.txt
      //This is just used to temporarily populate our application with temp data.
      var mockData = [
        {
          name: 'Todd L. Lowary',
          position: 'Professor',
          institution: 'University of Alberta',
          degree: {
            year: 1993,
            mentor: 'Ole Hindsgaul',
            institution: 'University of Alberta',
            status: 'Ph.D.'
          },
          postDoc:
            [
              {
                start: 1993,
                end: 1995,
                mentor: 'David R. Bundle',
                institution: 'University of Alberta',
              },
              {
                start: 1996,
                end: 1996,
                mentor: 'Morten Meldel',
                institution: 'Carlsberg Laboratory'
              }
            ],

        },
        {
          name: 'Wei Shi',
          position: 'Assistant Professor',
          institution: 'University of Arkansas',
          degree: {
            year: 2008,
            mentor: 'Todd L. Lowary',
            institution: 'University of Alberta',
            status: 'Ph.D.'
          },
          postdoc:
            [
              {
                start: 2008,
                end: 2012,
                mentor: 'Jun Liu',
                institution: 'Johns Hopkins University'
              }
            ]
        },
        {
          name: 'Ole Hindsgaul',
          position: 'Professor Emeritus',
          institution: 'University of Alberta',
          degree: {
            year: 1980,
            mentor: 'Raymond U. Lemieux',
            institution: 'University of Alberta',
            status: 'Ph.D.'
          },
          postdoc:
            [
              {
                start: 1980,
                end: 1981,
                mentor: 'Clinton E. Ballou',
                institution: 'University of California, Berkeley'
              }
            ]
        },
        {
          name: 'David R. Bundle',
          position: 'Professor Emeritus',
          institution: 'University of Alberta',
          degree: {
            year: 1971,
            mentor: 'James Baddiley',
            institution: 'Nottingham University',
            status: 'Ph.D.'
          },
          postdoc:
            [
              {
                start: 1971,
                end: 1973,
                mentor: 'Harold J. Jennings',
                institution: 'National Research Council of Canada'
              },
              {
                start: 1973,
                end: 1975,
                mentor: 'Raymond U. Lemieux',
                institution: 'University of Alberta'
              }
            ]
        }
      ];


    /**
     * Basic getter method to get the mock data.
     * $q is a service that runs functions asynchronously and then returns their return value when they are done.
     * $q is the promise library.
     * There is only one loop, so don't think of this being a literal thread.
     * Like in java how if you had an object with variable stuff,
     * @returns {*}
     */
      var getMockData = function() {
        var d = $q.defer(); //deferring a promise
        if(mockData){
          //if we get that http call and that is accessed then resolve the promise. Becomes args. Sees if mock data is or is not null.
          d.resolve(mockData);
        } else {
          d.reject('unable to load data'); //failure of the promise
        }
        return d.promise;
      };



    /**
     * This is a javascript object. getdata is that function and then this returns the javascript object
     * composed of functions. Returning an object comporsed of functions and their services.
     *
     * If you don't return it then it is hidden. Whatever is returned is what is seen.
     * That is like public vs. private.
     */
      return {
        getMockData: getMockData
      }
});
