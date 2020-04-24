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
 * Class representing a XcodeToolset.
 */
class XcodeToolset {
  /**
   * Create a XcodeToolset.
   * @property {array} xcodeSchemeContainers The Xcode scheme containers
   */
  constructor() {
  }

  /**
   * Defines the metadata of XcodeToolset
   *
   * @returns {object} metadata of XcodeToolset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'XcodeToolset',
      type: {
        name: 'Composite',
        className: 'XcodeToolset',
        modelProperties: {
          xcodeSchemeContainers: {
            required: true,
            serializedName: 'xcodeSchemeContainers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'XcodeToolsetXcodeSchemeContainersItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'XcodeToolsetXcodeSchemeContainersItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = XcodeToolset;
