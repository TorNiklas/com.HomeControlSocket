const { ZigBeeDriver } = require('homey-zigbeedriver');

const RootDevice = require('./device.js');
const SecondOutletDevice = require('./secondOutlet.device.js');

class MyDriver extends ZigBeeDriver {
	onMapDeviceClass(device) {
		if (device.getData().subDeviceId === 'secondOutlet') {
			return SecondOutletDevice;
		} else {
			return RootDevice;
		}
	}
}
module.exports = MyDriver;