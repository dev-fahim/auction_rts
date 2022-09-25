import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import helmet from 'helmet';
import StatusCodes from 'http-status-codes';
import { Server as SocketIo } from 'socket.io';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import body_parser from 'body-parser';

import 'express-async-errors';

import BaseRouter from './routes/api';
import logger from 'jet-logger';
import envVars from '@shared/env-vars';
import { CustomError } from '@shared/errors';


// **** Init express **** //

const app = express();


// **** Set basic express settings **** //
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(cors({
  origin: ['http://localhost:4200', 'http://192.168.0.103:4200', 'http://192.168.120.197:4200'],
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

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
  logger.err(err, true);
  const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
  return res.status(status).json({
    error: err.message,
  });
});


// **** Serve front-end content **** //

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Login page
app.get('/', (req: Request, res: Response) => {
  return res.sendFile('login.html', {root: viewsDir});
});

// Users page
app.get('/users', (req: Request, res: Response) => {
  const jwt = req.signedCookies[envVars.cookieProps.key];
  if (!jwt) {
    return res.redirect('/');
  } else {
    return res.sendFile('users.html', {root: viewsDir});
  }
});

// Chat page
app.get('/chat', (req: Request, res: Response) => {
  const jwt = req.signedCookies[envVars.cookieProps.key];
  if (!jwt) {
    return res.redirect('/');
  } else {
    return res.sendFile('chat.html', {root: viewsDir});
  }
});


// **** Setup Socket.io **** //

// Tutorial used for this: https://www.valentinog.com/blog/socket-react/

const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: ['http://localhost:4200', 'http://192.168.0.103:4200', 'http://192.168.120.197:4200'],
    methods: ['GET', 'POST']
  }
});

io.sockets.on('connect', () => {
  return app.set('socketio', io);
});


// **** Export default **** //

export default server;
