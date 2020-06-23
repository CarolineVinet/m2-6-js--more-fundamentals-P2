// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  let newArr = early.concat(late);
  for (i = 0; i < newArr.length; i++) {
    console.log(`${i + 1}. ${newArr[i]}`);
  }
};

printGuestOrder(earlyBirds, lateComers);
