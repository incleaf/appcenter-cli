/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Location for downloading crash raw
 *
 */
class GetRawCrashLocationOKResponse {
  /**
   * Create a GetRawCrashLocationOKResponse.
   * @property {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetRawCrashLocationOKResponse
   *
   * @returns {object} metadata of GetRawCrashLocationOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetRawCrashLocationOKResponse',
      type: {
        name: 'Composite',
        className: 'GetRawCrashLocationOKResponse',
        modelProperties: {
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetRawCrashLocationOKResponse;
