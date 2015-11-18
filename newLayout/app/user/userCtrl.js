angular.module('Music.User')
  .controller('UserCtrl', [
     '$scope', 'Auth',
    function($scope, Auth){
      $scope.createUser = function(){
        $scope.message = null;
        $scope.error = null;

        Auth.$createUser({
          email : $scope.email,
          password : $scope.password
        }).then(function(userData){
          $scope.message = "User Created with UID" + userData.uid;
        }).catch(function(error){
          $scope.error = error;
        });
      };

      $scope.removeUser = function(){
        $scope.message = null;
        $scope.error = null;

        Auth.$removeUser({
          email : $scope.email,
          password : $scope.password
        }).then(function(){
          $scope.message = "User Removed";
        }).catch(function(error){
          $scope.error = error;
        });
      };

      $scope.loginUser = function(){
        Auth.$authWithPassword({
          email : $scope.email,
          password : $scope.password
        }).then(function(authData){
          $scope.authData = authData;
        }).catch(function(error){
          $scope.error = error;
        });
      };
    }
  ])