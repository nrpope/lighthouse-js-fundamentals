const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas"
];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]); // i for ingredients
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (var c = 0; c < ingredients.length; c++) {
  //c for contents
  console.log(ingredients[c]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var b = ingredients.length; b > 0; b--) {
  //b variable for backwards
  console.log(ingredients[b - 1]); //add the b-1 so it prints backwards
}
