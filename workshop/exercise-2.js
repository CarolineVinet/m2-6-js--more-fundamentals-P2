// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  let newArr = early.concat(late);
  console.log(newArr);
};

printGuestOrder(earlyBirds, lateComers);
