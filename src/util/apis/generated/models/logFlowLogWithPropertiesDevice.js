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
 * Device characteristics.
 *
 */
class LogFlowLogWithPropertiesDevice {
  /**
   * Create a LogFlowLogWithPropertiesDevice.
   * @property {string} sdkName Name of the SDK. Consists of the name of the
   * SDK and the platform, e.g. "appcenter.ios", "hockeysdk.android".
   * @property {string} sdkVersion Version of the SDK in semver format, e.g.
   * "1.2.0" or "0.12.3-alpha.1".
   * @property {string} [wrapperSdkVersion] Version of the wrapper SDK in
   * semver format. When the SDK is embedding another base SDK (for example
   * Xamarin.Android wraps Android), the Xamarin specific version is populated
   * into this field while sdkVersion refers to the original Android SDK.
   * @property {string} [wrapperSdkName] Name of the wrapper SDK. Consists of
   * the name of the SDK and the wrapper platform, e.g. "appcenter.xamarin",
   * "hockeysdk.cordova".
   * @property {string} [model] Device model (example: iPad2,3).
   * @property {string} [oemName] Device manufacturer (example: HTC).
   * @property {string} osName OS name (example: iOS). The following OS names
   * are standardized (non-exclusive): Android, iOS, macOS, tvOS, Windows.
   * @property {string} osVersion OS version (example: 9.3.0).
   * @property {string} [osBuild] OS build code (example: LMY47X).
   * @property {number} [osApiLevel] API level when applicable like in Android
   * (example: 15).
   * @property {string} locale Language code (example: en_US).
   * @property {number} timeZoneOffset The offset in minutes from UTC for the
   * device time zone, including daylight savings time.
   * @property {string} [screenSize] Screen size of the device in pixels
   * (example: 640x480).
   * @property {string} appVersion Application version name, e.g. 1.1.0
   * @property {string} [carrierName] Carrier name (for mobile devices).
   * @property {string} [carrierCode] Carrier country code (for mobile
   * devices).
   * @property {string} [carrierCountry] Carrier country.
   * @property {string} appBuild The app's build number, e.g. 42.
   * @property {string} [appNamespace] The bundle identifier, package
   * identifier, or namespace, depending on what the individual plattforms use,
   * .e.g com.microsoft.example.
   * @property {string} [liveUpdateReleaseLabel] Label that is used to identify
   * application code 'version' released via Live Update beacon running on
   * device
   * @property {string} [liveUpdateDeploymentKey] Identifier of environment
   * that current application release belongs to, deployment key then maps to
   * environment like Production, Staging.
   * @property {string} [liveUpdatePackageHash] Hash of all files (ReactNative
   * or Cordova) deployed to device via LiveUpdate beacon. Helps identify the
   * Release version on device or need to download updates in future.
   * @property {string} [wrapperRuntimeVersion] Version of the wrapper
   * technology framework (Xamarin runtime version or ReactNative or Cordova
   * etc...). See wrapper_sdk_name to see if this version refers to Xamarin or
   * ReactNative or other.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LogFlowLogWithPropertiesDevice
   *
   * @returns {object} metadata of LogFlowLogWithPropertiesDevice
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogFlowLogWithProperties_device',
      type: {
        name: 'Composite',
        className: 'LogFlowLogWithPropertiesDevice',
        modelProperties: {
          sdkName: {
            required: true,
            serializedName: 'sdk_name',
            type: {
              name: 'String'
            }
          },
          sdkVersion: {
            required: true,
            serializedName: 'sdk_version',
            type: {
              name: 'String'
            }
          },
          wrapperSdkVersion: {
            required: false,
            serializedName: 'wrapper_sdk_version',
            type: {
              name: 'String'
            }
          },
          wrapperSdkName: {
            required: false,
            serializedName: 'wrapper_sdk_name',
            type: {
              name: 'String'
            }
          },
          model: {
            required: false,
            serializedName: 'model',
            type: {
              name: 'String'
            }
          },
          oemName: {
            required: false,
            serializedName: 'oem_name',
            type: {
              name: 'String'
            }
          },
          osName: {
            required: true,
            serializedName: 'os_name',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: true,
            serializedName: 'os_version',
            type: {
              name: 'String'
            }
          },
          osBuild: {
            required: false,
            serializedName: 'os_build',
            type: {
              name: 'String'
            }
          },
          osApiLevel: {
            required: false,
            serializedName: 'os_api_level',
            type: {
              name: 'Number'
            }
          },
          locale: {
            required: true,
            serializedName: 'locale',
            type: {
              name: 'String'
            }
          },
          timeZoneOffset: {
            required: true,
            serializedName: 'time_zone_offset',
            constraints: {
              InclusiveMaximum: 840,
              InclusiveMinimum: -840
            },
            type: {
              name: 'Number'
            }
          },
          screenSize: {
            required: false,
            serializedName: 'screen_size',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: true,
            serializedName: 'app_version',
            type: {
              name: 'String'
            }
          },
          carrierName: {
            required: false,
            serializedName: 'carrier_name',
            type: {
              name: 'String'
            }
          },
          carrierCode: {
            required: false,
            serializedName: 'carrier_code',
            type: {
              name: 'String'
            }
          },
          carrierCountry: {
            required: false,
            serializedName: 'carrier_country',
            type: {
              name: 'String'
            }
          },
          appBuild: {
            required: true,
            serializedName: 'app_build',
            type: {
              name: 'String'
            }
          },
          appNamespace: {
            required: false,
            serializedName: 'app_namespace',
            type: {
              name: 'String'
            }
          },
          liveUpdateReleaseLabel: {
            required: false,
            serializedName: 'live_update_release_label',
            type: {
              name: 'String'
            }
          },
          liveUpdateDeploymentKey: {
            required: false,
            serializedName: 'live_update_deployment_key',
            type: {
              name: 'String'
            }
          },
          liveUpdatePackageHash: {
            required: false,
            serializedName: 'live_update_package_hash',
            type: {
              name: 'String'
            }
          },
          wrapperRuntimeVersion: {
            required: false,
            serializedName: 'wrapper_runtime_version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LogFlowLogWithPropertiesDevice;
