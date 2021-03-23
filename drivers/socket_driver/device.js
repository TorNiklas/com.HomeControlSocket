'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
// const { ZigBeeDevice } = require('homey-meshdriver');
const { CLUSTER } = require('zigbee-clusters');

class MyZigBeeDevice extends ZigBeeDevice {

	onNodeInit() {
		// Register onoff capability
		// this.registerCapability('onoff', CLUSTER.ON_OFF);
		
		
		// this.registerCapability('onoff.one', CLUSTER.ON_OFF, { endpoint: 1 });
		// this.registerCapability('onoff.two', CLUSTER.ON_OFF, { endpoint: 2 });

		// this.registerCapability('onoff.one', CLUSTER.ON_OFF, {
		// 	// This is often just a string, but can be a function as well
		// 	set: value => (value ? 'setOn' : 'setOff'),
		// 	  function setParser(setValue) {
		// 		return setValue ? 'setOn' : 'setOff'; // This could also be an object for more complex
		// 		// commands
		// 	  },
		// 	  get: 'onOff'
		// 	  report: 'onOff'
		// 	  function reportParser(report) {
		// 		if (report && report.onOff === true) return true;
		// 		return false;
		// 	  },
		// 	  reportOpts: {
		// 		configureAttributeReporting: {
		// 		  minInterval: 3600, // Minimally once every hour
		// 		  maxInterval: 60000, // Maximally once every ~16 hours
		// 		  minChange: 1,
		// 		}
		// 	  },
		// 	  endpoint: 1, // Default is 1
		// 	  getOpts: {
		// 		getOnStart: true,
		// 		getOnOnline: true,
		// 		pollInterval: 30000, // in ms
		// 	  }
		//    })

		this.registerCapability('onoff.one', CLUSTER.ON_OFF, {
			// This is often just a string, but can be a function as well
			set: value => (value ? 'setOn' : 'setOff'),
			setParser: setValue => {
				return setValue ? 'setOn' : 'setOff'; // This could also be an object for more complex
				// commands
			},
			get: 'onOff',
			report: 'onOff',
			reportParser: report => {
			if (report && report.onOff === true) return true;
				return false;
			},
			reportOpts: {
				configureAttributeReporting: {
					minInterval: 3600, // Minimally once every hour
					maxInterval: 60000, // Maximally once every ~16 hours
					minChange: 1,
				}
			},
			endpoint: 1, // Default is 1
			getOpts: {
				getOnStart: true,
				getOnOnline: true,
				pollInterval: 30000, // in ms
			}
		})
		
		this.registerCapability('onoff.two', CLUSTER.ON_OFF, {
			// This is often just a string, but can be a function as well
			set: value => (value ? 'setOn' : 'setOff'),
			setParser: setValue => {
				return setValue ? 'setOn' : 'setOff'; // This could also be an object for more complex
				// commands
			},
			get: 'onOff',
			report: 'onOff',
			reportParser: report => {
			if (report && report.onOff === true) return true;
				return false;
			},
			reportOpts: {
				configureAttributeReporting: {
					minInterval: 3600, // Minimally once every hour
					maxInterval: 60000, // Maximally once every ~16 hours
					minChange: 1,
				}
			},
			endpoint: 2, // Default is 1
			getOpts: {
				getOnStart: true,
				getOnOnline: true,
				pollInterval: 30000, // in ms
			}
		})

		// this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 1 });
		// this.registerCapability('onoff', CLUSTER.ON_OFF, { endpoint: 2 });
		
		console.log("Registered");
	}
}
module.exports = MyZigBeeDevice;
