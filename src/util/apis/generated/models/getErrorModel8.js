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
 * Class representing a GetErrorModel8.
 */
class GetErrorModel8 {
  /**
   * Create a GetErrorModel8.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetErrorModel8
   *
   * @returns {object} metadata of GetErrorModel8
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetErrorModel',
      type: {
        name: 'Composite',
        className: 'GetErrorModel8',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetErrorModel8;