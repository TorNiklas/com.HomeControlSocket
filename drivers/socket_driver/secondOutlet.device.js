'use strict';

const { ZigBeeDevice, ZigBeeDriver } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER } = require('zigbee-clusters');

class SecondOutletDevice extends ZigBeeDevice {

	onNodeInit() {
		// Register capabilities
		this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 2 });
		this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { 
			endpoint: 2,
			getOpts: {
				getOnStart: true,
				getOnOnline: true,
				pollInterval: 3000, // in ms
			}
		});
	}
}
module.exports = SecondOutletDevice ;