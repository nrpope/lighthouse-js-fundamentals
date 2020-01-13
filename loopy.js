//numbers between 100 & 200
//Loopy on div 3, Lighthouse on div 4, LoopyLighthouse on both
var start = 100;
var end = 200;
for (x = start; x <= end; x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse"); //print LoopyLighthouse on both div
  } else if (x % 3 === 0) {
    console.log("Loopy"); //print Loopy on div 3
  } else if (x % 4 === 0) {
    console.log("Lighthouse"); //print Lighthouse on div 4
  } else {
    console.log(x); //print all other numbers between 100-200
  }
}
