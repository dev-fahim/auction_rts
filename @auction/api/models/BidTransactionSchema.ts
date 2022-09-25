/**
 * Auction Core API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuctionSchema } from './AuctionSchema';
import { UserSchema } from './UserSchema';
import { HttpFile } from '../http/http';

export class BidTransactionSchema {
    'guid': string;
    'created': Date;
    'updated': Date;
    'isActive': boolean;
    'auction'?: AuctionSchema;
    'user'?: UserSchema;
    'amount'?: number;
    'hasWon'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "auction",
            "baseName": "auction",
            "type": "AuctionSchema",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "UserSchema",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasWon",
            "baseName": "has_won",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BidTransactionSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

