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
 * Class representing a BranchStatusValueBranch.
 */
class BranchStatusValueBranch {
  /**
   * Create a BranchStatusValueBranch.
   * @property {string} name The branch name
   * @property {object} commit
   * @property {string} [commit.sha] The commit SHA
   * @property {string} [commit.url] The URL to the commit
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchStatusValueBranch
   *
   * @returns {object} metadata of BranchStatusValueBranch
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchStatusValue_branch',
      type: {
        name: 'Composite',
        className: 'BranchStatusValueBranch',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          commit: {
            required: true,
            serializedName: 'commit',
            type: {
              name: 'Composite',
              className: 'BranchStatusValueBranchCommit'
            }
          }
        }
      }
    };
  }
}

module.exports = BranchStatusValueBranch;
