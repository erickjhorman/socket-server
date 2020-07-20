import socketIO from 'socket.io';
import http from 'http';


export default class SocketServer {

    public io: socketIO.Server;

    constructor(server: http.Server) {
        this.io = socketIO(server);
        this.listenSocket();
    }

    private listenSocket() {
        console.log('Listening conexions ');

        /* Listen events in this case my socket will listen when a new user is connected*/

        this.io.on('connection', client => {
            console.log('New connected client');
        })

    }
}

