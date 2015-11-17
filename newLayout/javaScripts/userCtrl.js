angular.module('music.user')
  .controller('UserCtrl', [
    'Auth',
    function(Auth){
      this.createUser = function(){
        this.message = null;
        this.error = null;

        Auth.$createUser({
          email : this.email,
          password : this.password
        }.bind(this)).then(function(userData){
          this.message = "User Created with UID" + userData.uid;
        }.bind(this)).catch(function(error){
          this.error = error;
        }.bind(this));
      };

      this.removeUser = function(){
        Auth.$removeUser({
          email : this.email,
          password : this.password
        }.bind(this)).then(function(){
          this.message = "User Removed";
        }.bind(this)).catch(function(error){
          this.error = error;
        }.bind(this));
      };

      this.loginUser = function(){
        Auth.$authWithPassword({
          email : this.email,
          password : this.password
        }.bind(this)).then(function(authData){
          this.authData = authData;
        }.bind(this)).catch(function(error){
          this.error = error;
        }.bind(this));
      };
    }
  ])