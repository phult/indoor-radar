var centeryApp = angular.module('miniRadarApp', []);

centeryApp.factory('io', function ($rootScope) {
    var socket = io("http://" + host + ":" + port);
    return socket;
});
