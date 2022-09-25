import SocketIO from "socket.io";
import {AuctionSchema} from "../../@auction/api/models/AuctionSchema";

/**
 * Connect to specific auction room
 * @param socket
 * @param auctionGuid
 * @returns
 */
export function connectToAuctionRoom(socket: SocketIO.Socket, auctionGuid: string): void {
  socket.leave(auctionGuid);
  socket.join(auctionGuid);
}

/**
 * leave from specific auction room
 * @param socket
 * @param auctionGuid
 * @returns
 */
export function leaveToAuctionRoom(socket: SocketIO.Socket, auctionGuid: string): void {
  socket.leave(auctionGuid);
}

/**
 * Emit auction data to the room
 * @param socket
 * @param auction
 * @returns
 */
export function emitAuctionDataToRoom(socket: SocketIO.Socket, auction: AuctionSchema): void {
  const room = socket.to(auction.guid);
  room.emit('auction_changed', auction);
  console.log(auction.product.name);
}

export default {
  connectToAuctionRoom,
  leaveToAuctionRoom,
  emitAuctionDataToRoom
} as const;
