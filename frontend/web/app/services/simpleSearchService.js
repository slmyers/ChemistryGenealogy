/**
 * Created by ConnorSheremeta on 2016-02-29.
 */
/**
 * Search Service
 *
 * Status: SERVICE
 * Associated files: vis controller
 *
 */


angular.module('chemGeno')
    .service('simpleSearchService', function($q) {
        // source of mock data: https://github.com/401ChemistryGenealogy/ChemistryGenealogy/blob/master/sample_data/data.txt
        //This is just used to temporarily populate our application with temp data.
        var simpleMockData = [
            {'name': 'Todd L. Lowary',
                'institution': 'University of Alberta'},
            {'name': 'Ole Hindsgaul',
                'institution': 'University of Alberta'},
            {'name': 'David R. Bundle',
                'institution': 'University of Alberta'},
            {'name': 'Morten Meldel',
                'institution': 'Carlsberg Laboratory'},
            {'name': 'Wei Shi',
                'institution': 'University of Arkansas'},
            {'name': 'Raymond U. Lemieux',
                'institution': 'University of Alberta'},
            {'name': 'Clinton E. Ballou',
                'institution': 'University of California, Berkeley'},
            {'name': 'James Baddiley',
                'institution': 'Nottingham University'},
            {'name': 'Harold J. Jennings',
                'institution': 'National Research Council of Canada'},
            {'name': 'Harold J. Jennings',
                'institution': 'National Research Council of Canada'},
            {'name': 'Harold J. Jennings',
                'institution': 'National Research Council of Canada'},
            {'name': 'Harold J. Jennings',
                'institution': 'National Research Council of Canada'},
            {'name': 'Harold J. Jennings',
                'institution': 'National Research Council of Canada'}

        ];

        /**
         * Basic getter method to get the mock data.
         * $q is a service that runs functions asynchronously and then returns their return value when they are done.
         * $q is the promise library.
         * There is only one loop, so don't think of this being a literal thread.
         * Like in java how if you had an object with variable stuff,
         * @returns {*}
         */
        var getSimpleMockData = function() {
            var d = $q.defer(); //deferring a promise
            if(simpleMockData){
                //if we get that http call and that is accessed then resolve the promise. Becomes args. Sees if mock data is or is not null.
                d.resolve(simpleMockData);
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
            getSimpleMockData: getSimpleMockData
        }
    });
