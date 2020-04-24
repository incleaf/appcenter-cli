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
 * Class representing a ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem.
 */
class ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem {
  /**
   * Create a ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem.
   * @property {string} [className] name of the class
   * @property {string} [method] name of the method
   * @property {boolean} [classMethod] is a class method
   * @property {string} [file] name of the file
   * @property {number} [line] line number
   * @property {boolean} [appCode] this line isn't from any framework
   * @property {string} [frameworkName] Name of the framework
   * @property {string} [codeFormatted] Formatted frame string
   * @property {string} [codeRaw] Unformatted Frame string
   * @property {string} [language] programming language of the frame. Possible
   * values include: 'JavaScript', 'CSharp', 'Objective-C', 'Objective-Cpp',
   * 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
   * @property {string} [methodParams] parameters of the frames method
   * @property {string} [exceptionType] Exception type.
   * @property {string} [osExceptionType] OS exception type. (aka. SIGNAL)
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem
   *
   * @returns {object} metadata of ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupsSearchOKResponse_errorGroupsItem_reasonFramesItem',
      type: {
        name: 'Composite',
        className: 'ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem',
        modelProperties: {
          className: {
            required: false,
            serializedName: 'className',
            type: {
              name: 'String'
            }
          },
          method: {
            required: false,
            serializedName: 'method',
            type: {
              name: 'String'
            }
          },
          classMethod: {
            required: false,
            serializedName: 'classMethod',
            type: {
              name: 'Boolean'
            }
          },
          file: {
            required: false,
            serializedName: 'file',
            type: {
              name: 'String'
            }
          },
          line: {
            required: false,
            serializedName: 'line',
            type: {
              name: 'Number'
            }
          },
          appCode: {
            required: false,
            serializedName: 'appCode',
            type: {
              name: 'Boolean'
            }
          },
          frameworkName: {
            required: false,
            serializedName: 'frameworkName',
            type: {
              name: 'String'
            }
          },
          codeFormatted: {
            required: false,
            serializedName: 'codeFormatted',
            type: {
              name: 'String'
            }
          },
          codeRaw: {
            required: false,
            serializedName: 'codeRaw',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          methodParams: {
            required: false,
            serializedName: 'methodParams',
            type: {
              name: 'String'
            }
          },
          exceptionType: {
            required: false,
            serializedName: 'exceptionType',
            type: {
              name: 'String'
            }
          },
          osExceptionType: {
            required: false,
            serializedName: 'osExceptionType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupsSearchOKResponseErrorGroupsItemReasonFramesItem;
