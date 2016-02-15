angular.module('chemGeno')
.service('searchService', function($q) {
  // source of mock data: https://github.com/401ChemistryGenealogy/ChemistryGenealogy/blob/master/sample_data/data.txt
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

  var getMockData = function() {
    var d = $q.defer();
    if(mockData){
      d.resolve(mockData);
    } else {
      d.reject('unable to load data');
    }
    return d.promise;
  };

  return {
    getMockData: getMockData
  }
});
