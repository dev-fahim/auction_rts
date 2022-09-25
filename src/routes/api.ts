import { Router } from 'express';
import auctionRouter from './auction-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/auction', auctionRouter);


// **** Export default **** //

export default apiRouter;
