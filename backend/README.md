Remember to "bundle install" to download the gem files.

February 10, 2016:

* Initialized the backend with rails-api
* Followed most of #17 on https://github.com/mefeghhi/poll-api
* Haven't been able to do #18 yet
* Created a User model and controller
* Created a temporary model and controller for Contact Us (when receiving information for a concern)
* Honestly, haven't been able to do anything too solid for both


## example test for authentication route -- when it works it should return some token provided username/password combo 

http://stackoverflow.com/questions/6885990/rails-params-explained

`curl -X POST -H 'Content-Length: 0' http://localhost:3000/authenticate/?username=testUser&password=testPassword`

## sources

http://adamalbrecht.com/2015/07/20/authentication-using-json-web-tokens-using-rails-and-react/

http://adamalbrecht.com/2014/12/04/add-json-web-token-authentication-to-your-angular-rails-app/


### work on error repsonses... shouldn't be responding with HTML

https://wyeworks.com/blog/2016/1/12/improvements-to-error-responses-in-rails-5-api-mode
