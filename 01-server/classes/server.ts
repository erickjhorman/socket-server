import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';

import SocketServer from './sockets/connexion';
import messagesRoutes from '../routes/messagesRoutes';
import indexRoutes from '../routes/indexRoutes';


import { SERVER_PORT } from '../global/enviroments';

export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;
    public httpServer: http.Server;


    private constructor() {
        this.app = express();
        this.port = SERVER_PORT
        this.config();
        this.routes();
        this.httpServer = new http.Server(this.app);
        new SocketServer(this.httpServer);

    }


    public static get instance() {
        return this._intance || (this._intance = new this())
    }

    config(): void {

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/messages', messagesRoutes);
    }

    start(): void {
        this.httpServer.listen(this.port, () => {
            console.log('Server on port ', this.port);
        });
    }
}



