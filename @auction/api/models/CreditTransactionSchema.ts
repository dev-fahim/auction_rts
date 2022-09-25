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
import { BidTransactionSchema } from './BidTransactionSchema';
import { CreditSchema } from './CreditSchema';
import { CreditTransactionTypeChoices } from './CreditTransactionTypeChoices';
import { HttpFile } from '../http/http';

export class CreditTransactionSchema {
    'guid': string;
    'created': Date;
    'updated': Date;
    'isActive': boolean;
    'credit': CreditSchema;
    'amount'?: number;
    'type': CreditTransactionTypeChoices;
    'auction'?: AuctionSchema;
    'description'?: string;
    'bidTransaction'?: BidTransactionSchema;

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
            "name": "credit",
            "baseName": "credit",
            "type": "CreditSchema",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreditTransactionTypeChoices",
            "format": ""
        },
        {
            "name": "auction",
            "baseName": "auction",
            "type": "AuctionSchema",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "bidTransaction",
            "baseName": "bid_transaction",
            "type": "BidTransactionSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreditTransactionSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
