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
 * Class representing a UpdateAvatarOKResponse.
 */
class UpdateAvatarOKResponse {
  /**
   * Create a UpdateAvatarOKResponse.
   * @property {uuid} id The internal unique id (UUID) of the organization.
   * @property {string} displayName The display name of the organization
   * @property {string} name The slug name of the organization
   * @property {string} [avatarUrl] The URL to a user-uploaded Avatar image
   * @property {string} origin The creation origin of this organization.
   * Possible values include: 'appcenter', 'hockeyapp'
   * @property {string} createdAt The creation date of this organization
   * @property {string} updatedAt The date the organization was last updated at
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateAvatarOKResponse
   *
   * @returns {object} metadata of UpdateAvatarOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateAvatarOKResponse',
      type: {
        name: 'Composite',
        className: 'UpdateAvatarOKResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: true,
            serializedName: 'created_at',
            type: {
              name: 'String'
            }
          },
          updatedAt: {
            required: true,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateAvatarOKResponse;
