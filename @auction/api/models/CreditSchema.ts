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

import { UserSchema } from './UserSchema';
import { HttpFile } from '../http/http';

export class CreditSchema {
    'guid': string;
    'created': Date;
    'updated': Date;
    'isActive': boolean;
    'user': UserSchema;
    'balance'?: number;
    'expiry': Date;

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
            "name": "user",
            "baseName": "user",
            "type": "UserSchema",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": ""
        },
        {
            "name": "expiry",
            "baseName": "expiry",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CreditSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

