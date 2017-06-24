centeryApp.controller('MonitorController', function ($scope, $rootScope, $http, io) {
    var self = this;
    var scope = 100;
    var rootX = 0;
    var rootY = 0;
    var canvas = null;
    var context = null;
    var objectMap = [];
    this.__proto__ = new BaseController($scope, $rootScope, $http, io);
    $(document).ready(function () {
        canvasWidth = $("canvas").width();
        canvasHeight = $("canvas").height();
        canvas = document.getElementById("canvas");
        rootX = canvas.width / 2;
        rootY = canvas.height / 2;
        context = canvas.getContext("2d");
        self.drawScene();        
    });
    this.initialize = function () {
        this.__proto__.initialize();
        io.on('scan', function (data) {
            console.log('scan', data);
            self.scan(data.angle, data.distance);
        });
    };
    this.drawScene = function() {
        context.strokeStyle = "green";
        for (var i = scope; i >= 0; i = i - 20) {
            context.beginPath();
            context.arc(rootX, rootY, i, 0, Math.PI * 2, false);
            context.stroke();
        }
    }
    this.scan = function(angle, objectDistance) {
        objectMap[angle] = objectDistance;
        context.clearRect(0, 0, canvas.width, canvas.height);
        self.drawScene();
        context.save();
        context.translate(rootX,rootY);
        context.rotate(angle * Math.PI / 180);
        context.lineWidth = 6;
        context.moveTo(0, 0);
        context.lineTo(0, scope);
        context.stroke();
        context.restore();
        self.drawObjectMap();
    }
    this.drawObjectMap = function() {
        for (var angle in objectMap) {
            context.save();
            context.translate(rootX,rootY);
            context.rotate(angle * Math.PI / 180);
            var objectDistance = objectMap[angle];
            if (objectDistance >= 0 && objectDistance <= scope) {
                context.fillStyle = "red";
                context.fillRect(-3, objectDistance, 6, 2);
            }
            context.restore();
        }
    }
    this.initialize();
});
