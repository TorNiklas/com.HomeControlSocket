'use strict';

const { ZigBeeDevice, ZigBeeDriver } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER } = require('zigbee-clusters');

class SecondOutletDevice extends ZigBeeDevice {

	onNodeInit() {
		const settings = this.getSettings();

		// Register capabilities
		this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 2 });
		// this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { 
		// 	endpoint: 1,
		// 	getOpts: {
		// 		getOnStart: true,
		// 		getOnOnline: true,
		// 		pollInterval: settings.pollInterval * 1000, // in ms
		// 	}
		// });
	}

	// async onSettings({ oldSettings, newSettings, changedKeys }) {
	// 	this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { 
	// 		endpoint: 1,
	// 		getOpts: {
	// 			getOnStart: true,
	// 			getOnOnline: true,
	// 			pollInterval: newSettings.pollInterval * 1000, // in ms
	// 		}
	// 	});
	// }
}
module.exports = SecondOutletDevice ;