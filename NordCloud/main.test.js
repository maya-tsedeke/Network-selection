var maindata = require("./main");
var expected =[
        "Best network station for point 0,0 is 0,0) with speed: 81",
        "No network station within reach for point 100,100",
        "Best network station for point 15,10 is 5,5) with speed: 3.311",
        "Best network station for point 18,18 is 20,20) with speed: 10.059",
        "Best network station for point 13,13 is 5,5) with speed: 2.844",
        "No network station within reach for point 25,99"
    ];

test("The Output shoud include points and speed: ", () => {
    expect(expected).toEqual(maindata.best_speed_station_Device);
});


test("The Output shoud include points and speed: ", () => {
expect(expected).toEqual(maindata.best_speed_station_Device);
});


