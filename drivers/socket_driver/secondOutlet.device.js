'use strict';

const { ZigBeeDevice, ZigBeeDriver } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER } = require('zigbee-clusters');

class SecondOutletDevice extends ZigBeeDevice {

	onNodeInit() {
		// Register onoff capability
		this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 2 });
	}
}
module.exports = SecondOutletDevice ;