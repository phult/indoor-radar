module.exports = MonitorController;

var fs = require("fs");
var SerialPort = require("serialport");
var packageCfg = require(__dir + "/package.json");
function MonitorController($config, $event, $logger, $socketIOConnection) {
    var self = this;
    var title = $config.get("app.name");
    var switches = [];
    var serialport = new SerialPort.SerialPort("/dev/cu.usbmodem1421", {
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false,
        parser: SerialPort.parsers.readline("\r\n")
    });
    this.index = function(io) {
        var title = $config.get("app.name");
        io.render("home", {
            title: title,
            version: packageCfg.version,
            host: $config.get("app.host", "127.0.0.1"),
            port: $config.get("app.port", "8888"),
            user: io.session.get("user", {})
        });
    };
    $event.listen("connection.socketio.*", function(event, session) {
        $logger.debug("on socketio connection event: " + event);
    });
    serialport.on('open', function(){
      console.log("Serial port's opened");
      serialport.on('data', function(data){
          console.log("On serial data: ", data);
          var splitedData = data.split('-');
          if (splitedData.length == 2) {
              $socketIOConnection.broadcastMessage("scan", {
                  "angle": parseFloat(splitedData[0]),
                  "distance": parseFloat(splitedData[1])
              });
          } else if (splitedData.length == 1) {
              $socketIOConnection.broadcastMessage("scan", {
                  "angle": parseFloat(splitedData[0]),
                  "distance": parseFloat(999999)
              });
          }
      });
    });
    /*
    var angle = 170;
    setInterval(function() {
        $logger.debug("broadcastMessage...");
        $socketIOConnection.broadcastMessage("scan", {
            "angle": angle,
            "distance": angle
        });
        angle++;
    }, 300);
    */
}
