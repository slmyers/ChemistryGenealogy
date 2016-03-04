describe('loginService unit tests', function() {
  var service, httpMock, mockStore;
  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector, _loginService_) {
    service = _loginService_;
    /*
      this is a response from actual application
      {
        "auth_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NTgyNTM1ODh9.-TAh1UXhTXmJr8rIN9cmBifQ_JUajenHdRSkNkn6snM",
        "user":{
          "id":1,
          "username":"testUser"
        }
      }
    */
    httpMock = $injector.get('$httpBackend');
    httpMock.expectPOST('http://localhost:3000/authenticate',
                        {
                          email: 'testEmail@email.ca',
                          password: 'testPassword'
                        })
      .respond({
        auth_token: 'mockToken',
        user: {
          id: 1,
          email: 'testEmail@email.ca'
        }
    });

    httpMock.expectGET('/app/views/main.html')
      .respond({});
    httpMock.expectGET('/app/views/search.html')
      .respond({});


  }));

  afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
  });

  it('loginService.login(user) returns a thenable promise containing user data',
  function() {
    service.login({email:'testEmail@email.ca', password:'testPassword'})
    .then(function(resp){
      expect(resp).not.toBeNull();
      console.log(resp.data);
      expect(resp.data.auth_token).toBe('mockToken');
      expect(resp.data.user.id).toBe(1);
      expect(resp.data.user.email).toBe('testEmail@email.ca');
    });
    httpMock.flush();
  });

});
