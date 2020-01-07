const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*"); //change key on 5th chorus
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
