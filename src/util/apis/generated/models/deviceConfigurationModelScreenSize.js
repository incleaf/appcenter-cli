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
 * Physical device screen dimensions
 *
 */
class DeviceConfigurationModelScreenSize {
  /**
   * Create a DeviceConfigurationModelScreenSize.
   * @property {string} [cm]
   * @property {string} [inProperty]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceConfigurationModelScreenSize
   *
   * @returns {object} metadata of DeviceConfigurationModelScreenSize
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceConfiguration_model_screenSize',
      type: {
        name: 'Composite',
        className: 'DeviceConfigurationModelScreenSize',
        modelProperties: {
          cm: {
            required: false,
            serializedName: 'cm',
            type: {
              name: 'String'
            }
          },
          inProperty: {
            required: false,
            serializedName: 'in',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceConfigurationModelScreenSize;
