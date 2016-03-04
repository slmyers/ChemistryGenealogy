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
        var people = [
            {
                "id":1,
                "name":"Todd L. Lowary",
                "position":"professor",
                "institution_id":"University of Alberta"
            },
            {
                "id":2,
                "name":"Ole Hindsgaul",
                "position":"assistant professor",
                "institution_id":"University of Alberta"
            },
            {
                "id":3,
                "name":"David R. Bundle",
                "position":"professor emeritus",
                "institution_id":"University of Alberta"
            },
            {
                "id":2,
                "name":"Morten Meldel",
                "position":"assistant professor",
                "institution_id":"Carlsberg Laboratory"
            },
            {
                "id":2,
                "name":"Wei Shi",
                "position":"assistant professor",
                "institution_id":"University of Arkansas"
            },
            {
                "id":2,
                "name":"Raymond U. Lemieux",
                "position":"assistant professor",
                "institution_id":"University of Alberta"
            },
            {
                "id":2,
                "name":"James Baddiley",
                "position":"assistant professor",
                "institution_id":"Nottingham University"

            }];

        var institutions = [
            {
                "id":1,
                "name":"university of alberta",
                "approved":true
            },
            {
                "id":3,
                "name":"university of arkansas",
                "approved":true
            }];

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
            getSimpleMockData: getSimpleMockData,
            people: people,
            institutions: institutions
        }
    });
