module.exports = function ($route, $logger) {
    /** Register HTTP requests **/
    $route.get("/", "MonitorController@index");
    /** Register socket.io requests **/
    /** Register filters **/
};
