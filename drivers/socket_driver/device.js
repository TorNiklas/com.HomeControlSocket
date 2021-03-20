'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

class MyZigBeeDevice extends ZigBeeDevice {
  onNodeInit() {
    // Register onoff capability
    this.registerCapability('onoff', CLUSTER.ON_OFF);
    console.log("Registered");
  }
}
module.exports = MyZigBeeDevice;
