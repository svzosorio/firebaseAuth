'Use Strict';
angular
.module('App')
.controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
    var ref = new Firebase(FURL);

    console.log('InHome');

    $scope.logOut = function () {
        Auth.logout();
        $location.path("/login");
    }
});
