/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: DRMDeviceGroupEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  export class DRMDeviceGroupEvent extends flash.events.Event {
    static initializer: any = null;
    constructor (type: string, bubbles: boolean = false, cancelable: boolean = false, deviceGroup: flash.net.drm.DRMDeviceGroup = null) {
      type = "" + type; bubbles = !!bubbles; cancelable = !!cancelable; deviceGroup = deviceGroup;
      false && super(undefined, undefined, undefined);
      notImplemented("Dummy Constructor: public flash.events.DRMDeviceGroupEvent");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    deviceGroup: flash.net.drm.DRMDeviceGroup;
    clone: () => flash.events.Event;
    m_deviceGroup: flash.net.drm.DRMDeviceGroup;
    // Instance AS -> JS Bindings
  }
}