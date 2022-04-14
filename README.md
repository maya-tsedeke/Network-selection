# Tech-assignment
This is Nordcloud, IBM company , Finland Tech assignment answer.
The problem solved by JavaScript program 
 In this program I tried to address all questions , The code structure contains 5 JS files
 1. calculate_distance.js: Here used to calculate the distance of the device from the network station. The method I used to calculate linear distance equestions
  Linear Distance means the shortest horizontal distance from the nearest point of a structure or object to the high speed or network line to the device from station.

 2. calculate_speed.js
 Speed calculation formula already defined in the problems: What is the speed of network From Current device location to pointed station location?
            Defined formula is speed = (reach - device's distance from network station)^2
            in this file I wrot the code to calculate the speed of the connection from network station to the node or devices. To calculate this I used builtin math library which is called math.pow() function
            Also we can use without builtin function like below
            
            var result = (reach-distance)*(reach-distance);
            return res;

 3. define_device_loc.js
             In this file I defined and initialized the value of xy points for device current location
 4. define_station.js
              In this file I Defined and initialized the value of current point of the station location
 5. main.js
 Any programmer can easily modify in main.js programm because all code segmments are written supparatly 
 The output generated in this js file.

 This can be easily maintain and modified by any programmers.

 INSTRUCTION

If you want to test if a piece of code worked or not, you can use VSCode to run JavaScript.


This article explains how to run JavaScript problem solution in VSCode. To run this JavaScript code in Visual Studio, follow these steps:


1. The first step is to install Node.js on your MacBook/Windows/Ubuntu computer so that you may use it to call scripts.
You can get Node.js for free by going to this link. https://nodejs.org/en/ => please install latest Node js
2. The second step is to create a new folder and then open it in Visual Studio Code.
After that, in visual studio code go to teminal and then select new terminal. In the terminal write the following command:
![Getting Started](images/img.jpg)
git clone https://github.com/maya-tsedeke/Tech-assignment.git 
cd Tech-assignment
node main.js

-------- After running the above comands you will see the following result in the terminal--------

Best network station for point 0,0 is 0,0) with speed: 81
No network station within reach for point 100,100
Best network station for point 15,10 is 5,5) with speed: 3.311
Best network station for point 18,18 is 20,20) with speed: 10.059
Best network station for point 13,13 is 5,5) with speed: 2.844
No network station within reach for point 25,99



To modify this code you can start from the define_device_loc and define_station.js file. write JavaScript code and save it. And the to test your modification you can write again node main.js.

NB: You can also use browser console to test your result




