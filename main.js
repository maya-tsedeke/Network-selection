//This is CommonJS. We can also use ES6 technology like import/export
var Distance = require("./calculate_distance");
var _Speed = require("./calculate_speed");
var stations_loc = require("./define_station");
var device_loc = require("./define_device_loc");

//Defining device to station network connection
var Distance_dev_sta = function (conStations, deviceLocation) {
    return conStations.map(function (connectpoints) {
        var x = connectpoints[0];
        var y = connectpoints[1];
        var reach = connectpoints[2];
        var con_St_Location = {
            x: x,
            y: y
        };
        var distance_Device_Station = (0, Distance.calculateDistance)(deviceLocation, con_St_Location);
        return {
            distance_Device_Station: distance_Device_Station,
            location: { x: x, y: y },
            reach: reach
        };
    });
};
/*Object.assign is not available in ES5, it's introduced in ES6. 
So I assume the below code is written that way to be compatible with ES5.
if we use ES6 no need to use built in object for this code.

Next programmer can write the code with ES6 then ignore the below code to minimize line of codes

Mostly, we can use this below code in wordperss technology. But it is not compulsory beause depends on tools that 
we want to compile JS file
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Calculate network connection speed
var calc_con_speed = function (conStations) {
    return conStations.map(function (station) {
        var distanceIsBiggerThanReach = station.distance_Device_Station > station.reach;
        if (distanceIsBiggerThanReach) {
            return __assign(__assign({}, station), { speed: 0 });
        }
        else {
            return __assign(__assign({}, station), { speed: (0, _Speed.calculateSpeed)(station.reach, station.distance_Device_Station) });
        }
    });
};
//Best station found, output station location and speed
var best_Station = function (NetworkStation, deviceLocation) {
    var station_Speed = NetworkStation.reduce(function (former_distance, reach_distance) {
        return former_distance.speed > reach_distance.speed ? former_distance : reach_distance;
    });
    if (station_Speed.speed === 0) {
        return "No network station within reach for point ".concat(deviceLocation.x, ",").concat(deviceLocation.y);
    }
    else {
        return "Best network station for point ".concat(deviceLocation.x, ",").concat(deviceLocation.y, " is ").concat(station_Speed.location.y, ",").concat(station_Speed.location.x, ") with speed: ").concat(Math.round(station_Speed.speed * 1000) / 1000);
    }
};
//Find Best network station from station point to device
var findbest_Station = function (deviceLocations) {
    return deviceLocations.map(function (deviceLocation) {
        var connectedRout = Distance_dev_sta((0, stations_loc.StationsPoint)(), deviceLocation);
        var conStations = calc_con_speed(connectedRout);
        var best_speed_station_Device = best_Station(conStations, deviceLocation);
        return best_speed_station_Device;
    });
};
var best_speed_station_Device = findbest_Station((0, device_loc.DevicesLocation)());
//Display result here (loop untile complete all points)
best_speed_station_Device.forEach(function (best_station_rout) { return console.log(best_station_rout); });
