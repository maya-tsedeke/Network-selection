
var calculateDistance = function (point1, point2) {
    //Take the coordinates of two points we want to find the distance between.
    var x21 = point2.x - point1.x;
   // x1 is the horizontal coordinate (along the x axis) of Point 1, and 
   //x2 is the horizontal coordinate of Point 2. 
   var y21 = point2.y - point1.y;
   /*y1 is the vertical coordinate (along the y axis) of Point 1, 
   y2 is the vertical coordinate of Point 2.

   For an example, take the points (0,0) and (100,100). If (0,0) is (x1,y1), then (100,100) is (x2,y2).
    x21= 100-0 and y21 = 100-0  ==> (Xb,Yb) =(100.100) which is called base points between horizontal and vertical linear distances
    */
    var Xpoint = Math.pow(x21, 2);  //((x2-x1),2)==>(100,2) 2 the power of 100
    var Ypoint = Math.pow(y21, 2);  //((y2-y1),2)==>(100,2) 2 the power of 100
   //Find the linear horizontal and vertical distance between the the two points
    var DistanceOfTwoPoints = Math.sqrt(Xpoint + Ypoint); // final distance between two points
    return DistanceOfTwoPoints;
};
exports.calculateDistance = calculateDistance;
