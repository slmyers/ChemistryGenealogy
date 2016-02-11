Remember to "bundle install" to download the gem files.

February 10, 2016:

* Initialized the backend with rails-api
* Followed most of #17 on https://github.com/mefeghhi/poll-api
* Haven't been able to do #18 yet
* Created a User model and controller
* Created a temporary model and controller for Contact Us (when receiving information for a concern)
* Honestly, haven't been able to do anything too solid for both


## example test for authentication route -- when it works it should return some token provided username/password combo 


`curl -X POST http://localhost:3000/authenticate -H "Content-Type: application/json" -d '{"username":"xyz","password":"xyz"}'`

## sources

http://adamalbrecht.com/2015/07/20/authentication-using-json-web-tokens-using-rails-and-react/

http://adamalbrecht.com/2014/12/04/add-json-web-token-authentication-to-your-angular-rails-app/

