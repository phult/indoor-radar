centeryApp.controller('MonitorController', function ($scope, $rootScope, $http, io) {
    var self = this;
    $scope.configs = configs;
    this.__proto__ = new BaseController($scope, $rootScope, $http, io);    
    this.initialize = function () {
        this.__proto__.initialize();
    };
    $scope.save = function(config) {
        config.isEditing = false;
        /* TODO
        $http.post("/setting", config).success(function (data) {
        }).error(function () {
            config.value = config.currentValue;
        });
        */
    };
    $scope.edit = function(config) {
        config.isEditing = true;
        config.currentValue = config.value;
    };
    $scope.cancel = function(config) {
        config.isEditing = false;
        config.value = config.currentValue;
    };
    this.initialize();
});
