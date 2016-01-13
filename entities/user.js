 Socket {
  nsp: 
   Namespace {
     name: '/',
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Circular],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     sockets: [ [Circular] ],
     connected: { '7DgTsylUDUtwhpzHAAAA': [Circular] },
     fns: [],
     ids: 0,
     acks: {},
     adapter: 
      Adapter {
        nsp: [Circular],
        rooms: [Object],
        sids: [Object],
        encoder: Encoder {} },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  server: 
   Server {
     nsps: { '/': [Object] },
     _path: '/socket.io',
     _serveClient: true,
     _adapter: [Function: Adapter],
     _origins: '*:*',
     sockets: 
      Namespace {
        name: '/',
        server: [Circular],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        acks: {},
        adapter: [Object],
        _events: [Object],
        _eventsCount: 1 },
     eio: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     httpServer: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '6::::2307' },
     engine: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 } },
  adapter: 
   Adapter {
     nsp: 
      Namespace {
        name: '/',
        server: [Object],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        acks: {},
        adapter: [Circular],
        _events: [Object],
        _eventsCount: 1 },
     rooms: { '7DgTsylUDUtwhpzHAAAA': [Object] },
     sids: { '7DgTsylUDUtwhpzHAAAA': [Object] },
     encoder: Encoder {} },
  id: '7DgTsylUDUtwhpzHAAAA',
  client: 
   Client {
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Object],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     conn: 
      Socket {
        id: '7DgTsylUDUtwhpzHAAAA',
        server: [Object],
        upgraded: false,
        readyState: 'open',
        writeBuffer: [Object],
        packetsFn: [Object],
        sentCallbackFn: [],
        request: [Object],
        remoteAddress: '::1',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: [Object],
        transport: [Object],
        _events: [Object],
        _eventsCount: 3 },
     encoder: Encoder {},
     decoder: Decoder { reconstructor: null, _callbacks: [Object] },
     id: '7DgTsylUDUtwhpzHAAAA',
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=L8wEf8E',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     onclose: [Function: bound ],
     ondata: [Function: bound ],
     onerror: [Function: bound ],
     ondecoded: [Function: bound ],
     sockets: [ [Circular] ],
     nsps: { '/': [Circular] },
     connectBuffer: [] },
  conn: 
   Socket {
     id: '7DgTsylUDUtwhpzHAAAA',
     server: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     upgraded: false,
     readyState: 'open',
     writeBuffer: [ [Object] ],
     packetsFn: [ undefined ],
     sentCallbackFn: [],
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=L8wEf8E',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     remoteAddress: '::1',
     checkIntervalTimer: null,
     upgradeTimeoutTimer: null,
     pingTimeoutTimer: 
      { _called: false,
        _idleTimeout: 85000,
        _idlePrev: [Object],
        _idleNext: [Object],
        _idleStart: 607,
        _onTimeout: [Function],
        _repeat: null },
     transport: 
      XHR {
        readyState: 'opening',
        maxHttpBufferSize: 100000000,
        supportsBinary: true,
        _events: [Object],
        _eventsCount: 5,
        sid: '7DgTsylUDUtwhpzHAAAA',
        req: null,
        res: null,
        writable: false },
     _events: 
      { close: [Object],
        data: [Function: bound ],
        error: [Function: bound ] },
     _eventsCount: 3 },
  rooms: [],
  acks: {},
  connected: true,
  disconnected: false,
  handshake: 
   { headers: 
      { host: 'localhost:2307',
        connection: 'keep-alive',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
        origin: 'null',
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'en-US,en;q=0.8,ja;q=0.6,vi;q=0.4',
        cookie: 'io=5xybnhRgj5O57lmOAAAB' },
     time: 'Wed Jan 13 2016 16:04:23 GMT+0700 (ICT)',
     address: '::1',
     xdomain: true,
     secure: false,
     issued: 1452675863069,
     url: '/socket.io/?EIO=3&transport=polling&t=L8wEf8E',
     query: { EIO: '3', transport: 'polling', t: 'L8wEf8E' } } }