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

import { HttpFile } from '../http/http';

export class ConsoleHomeDataSchema {
    'totalProducts': number;
    'totalVerifiedProducts': number;
    'totalOnProcessProducts': number;
    'totalRunningAuctions': number;
    'totalBids': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalProducts",
            "baseName": "total_products",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalVerifiedProducts",
            "baseName": "total_verified_products",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalOnProcessProducts",
            "baseName": "total_on_process_products",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalRunningAuctions",
            "baseName": "total_running_auctions",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalBids",
            "baseName": "total_bids",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConsoleHomeDataSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

