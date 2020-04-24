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
 * Class representing a DeleteErrorErrorModel.
 */
class DeleteErrorErrorModel {
  /**
   * Create a DeleteErrorErrorModel.
   * @property {object} error
   * @property {string} [error.code] Possible values include: 'BadRequest',
   * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
   * 'Unauthorized', 'TooManyRequests'
   * @property {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteErrorErrorModel
   *
   * @returns {object} metadata of DeleteErrorErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteErrorErrorModel',
      type: {
        name: 'Composite',
        className: 'DeleteErrorErrorModel',
        modelProperties: {
          error: {
            required: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'DeleteErrorErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteErrorErrorModel;
