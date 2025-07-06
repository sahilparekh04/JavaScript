function foodSystem(custName, callback) {
  setTimeout(() => {
    const data = ["Sahil", "Vivek", "Kenil"];
    let isExist;
    for (const e of data) {
      if (custName == e) {
        isExist = true;
        break;
      } else {
        isExist = false;
      }
    }
    callback(isExist);
  }, 1000);
}

foodSystem("Sahil", (record) => {
  if (record == true) {
    console.log("Customer Found in Record!");
  } else {
    console.log("Customer Not Found in Record!");
  }
});
