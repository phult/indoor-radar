module.exports = MonitorController;

var fs = require("fs");
var packageCfg = require(__dir + "/package.json");
function MonitorController($config, $event, $logger) {
    var self = this;
    var title = $config.get("app.name");
    var switches = [];
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
}
