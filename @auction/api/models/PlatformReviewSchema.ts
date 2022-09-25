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

import { ProfileSchema } from './ProfileSchema';
import { HttpFile } from '../http/http';

export class PlatformReviewSchema {
    'guid': string;
    'created': Date;
    'updated': Date;
    'isActive': boolean;
    'rates'?: number;
    'comment'?: string;
    'isReported'?: boolean;
    'profile': ProfileSchema;

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
            "name": "rates",
            "baseName": "rates",
            "type": "number",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "isReported",
            "baseName": "is_reported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "ProfileSchema",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlatformReviewSchema.attributeTypeMap;
    }

    public constructor() {
    }
}
