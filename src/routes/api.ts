import { Router } from 'express';
import { authMw } from './middleware';
import authRouter from './auth-router';
import userRouter from './user-router';
import chatRouter from './chat-router';
import auctionRouter from './auction-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', authMw, userRouter);
apiRouter.use('/chat', authMw, chatRouter);
apiRouter.use('/auction', auctionRouter);


// **** Export default **** //

export default apiRouter;