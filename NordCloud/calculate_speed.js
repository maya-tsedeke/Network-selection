

var calculateSpeed = function (reach, distance) {

    return Math.pow(reach - distance, 2);
    //var res = (reach-distance)*(reach-distance);
    //return res;
};

exports.calculateSpeed = calculateSpeed;
