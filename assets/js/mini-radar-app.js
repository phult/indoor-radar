var centeryApp = angular.module('miniRadarApp', []);

centeryApp.factory('io', function ($rootScope) {
    var socket = io("http://" + host + ":" + port, {
        query:
            "extra=ctr_type,ctr_apiKey" +
            "&ctr_type=user" +
            "&ctr_apiKey=" + apiKey
    });
    return socket;
});
