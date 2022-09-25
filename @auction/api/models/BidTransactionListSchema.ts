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

import { BidTransactionSchema } from './BidTransactionSchema';
import { HttpFile } from '../http/http';

export class BidTransactionListSchema {
    'count': number;
    'nextPage'?: number;
    'previousPage'?: number;
    'totalPages': number;
    'data': Array<BidTransactionSchema>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "nextPage",
            "baseName": "next_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "previousPage",
            "baseName": "previous_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "total_pages",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BidTransactionSchema>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BidTransactionListSchema.attributeTypeMap;
    }

    public constructor() {
    }
}

