//Phil Hofer
//triloop.js
//This program uses the # symbol and creates a triangle in 7 lines.
//Updated 1/26/2015 with comments

//Declare the variable that is used on each line to produce a triangle
var string = '';
//This for loop will produce the triangle
for (var i=0;i<7;i++) {
  //This line concatenates each # to another in order to "draw" the triangle.
  string = string + '#';
  //Print the triangle out.
  console.log(string);
}
