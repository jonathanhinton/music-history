
var app = angular.module('MusicHistory', ['firebase', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
    .when('/user-login', {
      templateUrl: 'partials/user-login.html',
      controller: 'UserCtrl as UserCtrl'
    })
      .when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongListCtrl as SongListCtrl'
      })
      .when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'AddSongCtrl as AddSongCtrl'
      })
      .when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl as SongDetailCtrl'
      })
      .otherwise({redirectTo : '/user-login'});
}]);

app.controller('SongListCtrl', [
  "$routeParams",
  "$firebaseArray",
    function($routeParams, $songsArray){
      this.songToDelete = {};
      this.songId = $routeParams.songId;

      var ref = new Firebase("https://listenup.firebaseio.com/songs");

      this.song_list = $songsArray(ref);
      console.log("$scope.song_list", this.song_list);

      this.rmSong = function(song){
        console.log("id", song.$id);
        angular.element()
        this.song_list.$remove(song);
      };
    }
  ]
);

app.controller('AddSongCtrl',
  [
    "$firebaseArray",
      function($songsArray) {

        var ref = new Firebase("https://listenup.firebaseio.com/songs");
        this.songs = $songsArray(ref);
        this.newSong = {};

        this.addSong = function() {
          this.songs.$add ({
            title: this.newSong.title,
            album: this.newSong.album,
            artist: this.newSong.artist,
            year : this.newSong.year
          });

        console.log("Addsong", this.songs);
      };
    }
  ]
);

app.controller('SongDetailCtrl',
  [
    "$routeParams",
    "$firebaseArray",
    function($routeParams, $songsArray){
      this.selectedSong = {};
      this.songId = $routeParams.songId;

      var ref = new Firebase("https://listenup.firebaseio.com/songs");

      this.songs = $songsArray(ref);

      this.songs.$loaded()
      .then(function(){
        this.selectedSong = this.songs.$getRecord(this.songId);
        console.log("$scope.selectedSong", this.selectedSong);
      }.bind(this))
      .catch(function(error){
        console.log("error");
      });
    }
  ]
);



