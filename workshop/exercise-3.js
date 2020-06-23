// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const sortList = (arr) => {
  console.log(arr);
  let copiedArray = [...arr];
  let alphOrder = copiedArray.sort();
  for (let i = 0; i < alphOrder.length; i++) {
    console.log(`${alphOrder[i]} (${arr.indexOf(alphOrder[i]) + 1})`);
  }
};
sortList(mostPopularFood);
