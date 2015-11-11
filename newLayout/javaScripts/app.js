
var app = angular.module('MusicHistory', []);

app.controller("interactCtrl", function($scope, $http){
  $scope.songList = [{
      title: "The Walk",
      artist: "Mayer Hawthorne",
      album: "How do You Do",
      genre: "Blues"
    },
    {
      title: "You Should've Come Over",
      artist: "Jeff Buckley",
      album: "Grace",
      genre: "Pop"
    },
    {
      title: "It's the End of The World as We Know It",
      artist: "R.E.M.",
      album: "Document",
      genre: "Rock"
    },
    {
      title: "A Long December",
      artist: "Counting Crows",
      album: "Recovering the Satellites",
      genre: "Pop"
    },
    {
      title: "Letting the Cables Sleep",
      artist: "Bush",
      album: "Science of Things",
      genre: "Rock"
    },
    {
      title: "The Big Sleep",
      artist: "Murder By Death",
      album: "In Bocca al Luppo",
      genre: "Indie"
    },
    {
      title: "Vanderlyle Crybaby Geeks",
      artist: "The National",
      album: "High Violet",
      genre: "Indie"
    }];
  $scope.title = "yes we can";

});