import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import http from 'http';
import helmet from 'helmet';
import { Server as SocketIo } from 'socket.io';
import express from 'express';
import cors from 'cors';
import body_parser from 'body-parser';

import 'express-async-errors';

import BaseRouter from './routes/api';
import envVars from './shared/env-vars';


// **** Init express **** //

const app = express();


// **** Set basic express settings **** //
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(cors({
  origin: ['http://localhost:4200', 'http://192.168.0.103:4200', 'http://192.168.120.197:4200', 'https://helpful-marigold-e52cb8.netlify.app'],
  methods: ['GET', 'POST']
}))
app.use(cookieParser(envVars.cookieProps.secret));

// Show routes called in console during development
if (envVars.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Security
if (envVars.nodeEnv === 'production') {
  app.use(helmet());
}

// Add APIs
app.use('/api', BaseRouter);

// **** Setup Socket.io **** //

// Tutorial used for this: https://www.valentinog.com/blog/socket-react/

const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: ['http://localhost:4200', 'http://192.168.0.103:4200', 'http://192.168.120.197:4200', 'https://helpful-marigold-e52cb8.netlify.app'],
    methods: ['GET', 'POST']
  }
});

io.sockets.on('connect', () => {
  return app.set('socketio', io);
});


// **** Export default **** //

export default server;
