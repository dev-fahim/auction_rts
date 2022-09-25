import {Request, Response, Router} from "express";
import StatusCodes from "http-status-codes";
import {ParamMissingError, RoomNotFoundError} from "@shared/errors";
import SocketIO from "socket.io";
import auctionService from '@services/aution-service';
import {AuctionSchema} from "../../@auction/api/models/AuctionSchema";

// Misc
const router = Router();
const {OK} = StatusCodes;

// Paths
export const p = {
  connect: '/connect-auction-room/:socketId/:auctionGuid',
  leave: '/leave/:socketId/:auctionGuid',
  emit_auction_schema: '/emit-auction-schema/:socketId',
} as const;

/**
 * Connect to auction room.
 */
router.post(p.connect, (req: Request, res: Response) => {
  const {socketId, auctionGuid} = req.params;
  // Check params
  if (!socketId || !auctionGuid) {
	throw new ParamMissingError();
  }
  // Get room
  const io: SocketIO.Server = req.app.get('socketio');
  const socket = io.sockets.sockets.get(socketId);
  if (!socket) {
	throw new RoomNotFoundError();
  }
  // Connect
  auctionService.connectToAuctionRoom(socket, auctionGuid);
  // Return
  return res.status(OK).end();
});

/**
 * Leave from auction room.
 */
router.post(p.leave, (req: Request, res: Response) => {
  const {socketId, auctionGuid} = req.params;
  // Check params
  if (!socketId || !auctionGuid) {
	throw new ParamMissingError();
  }
  // Get room
  const io: SocketIO.Server = req.app.get('socketio');
  const socket = io.sockets.sockets.get(socketId);
  if (!socket) {
	throw new RoomNotFoundError();
  }
  // Connect
  auctionService.leaveToAuctionRoom(socket, auctionGuid);
  // Return
  return res.status(OK).end();
});

/**
 * Leave from auction room.
 */
router.post(p.emit_auction_schema, (req: Request, res: Response) => {
  const {socketId} = req.params;
  const auction: AuctionSchema = req.body;
  console.log(socketId, auction)
  // Check params
  if (!socketId) {
	throw new ParamMissingError();
  }
  // Get room
  const io: SocketIO.Server = req.app.get('socketio');
  const socket = io.sockets.sockets.get(socketId);
  if (!socket) {
	throw new RoomNotFoundError();
  }
  // Connect
  console.log(auction);
  auctionService.emitAuctionDataToRoom(socket, auction);
  // Return
  return res.status(OK).end();
});

export default router;
