# Socket
Adds support for HCO

## Flow cards 

### Device: Develco Home Control Outlet

#### Triggers
- Outlet is turned on
- Outlet is turned off
- Temperature changed

#### Conditions
- Outlet is turned on
- Outlet is turned off
- Temperature is above value

#### Actions
- Turn outlet on
- Turn outlet off
- Toggle outlet

### Release Notes

#### 1.2.0
- Temperature polling is now every three seconds (up from never)
- Added condition: Temperature is above value

#### 1.1.0
- Temperature capability enabled

#### 1.0.0
- Each outlet now has its own device card, for easier on/off-turning

#### 0.0.2
- Both sockets can be turned on and off

#### 0.0.1
- Initial version