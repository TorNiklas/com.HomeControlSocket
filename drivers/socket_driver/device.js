'use strict';

const Homey = require('homey');
const { ZigBeeDevice, ZigBeeDriver } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER, } = require('zigbee-clusters');

class RootDevice extends ZigBeeDevice {

	onNodeInit() {
		const settings = this.getSettings();

		// Register capabilities
		this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 1 });
		this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { 
			endpoint: 1,
			getOpts: {
				getOnStart: true,
				getOnOnline: true,
				pollInterval: settings.pollInterval * 1000, // in ms
			}
		});

		let temperatureCondition = this.homey.flow.getConditionCard('temp_above');
		temperatureCondition.registerRunListener(async (args, state) => {
			return state.value > args.value;
		});
	}

	async onSettings({ oldSettings, newSettings, changedKeys }) {
		this.registerCapability('measure_temperature', CLUSTER.TEMPERATURE_MEASUREMENT, { 
			endpoint: 1,
			getOpts: {
				getOnStart: true,
				getOnOnline: true,
				pollInterval: newSettings.pollInterval * 1000, // in ms
			}
		});
	}
}
module.exports = RootDevice;
