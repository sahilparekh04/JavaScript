function sandwitchMaker() {
  return new Promise((resolve, reject) => {
    const bread = "bread";
    console.log("It takes some time...");
    setTimeout(() => {
      const urlTest = Math.floor(Math.random() * 2) ? true : false;
      if (urlTest == true) {
        resolve(bread);
      } else {
        reject("Bread is not available.");
      }
    }, 1000);
  });
}

function addButter(bread) {
  return new Promise((resolve, reject) => {
    console.log("It takes some time...");
    setTimeout(() => {
      const checkButter = Math.floor(Math.random() * 2) ? true : false;
      const Butter = "Butter";
      if (checkButter == true && bread == "bread") {
        resolve(Butter);
      } else {
        reject("Butter is not available.");
      }
    }, 1000);
  });
}

sandwitchMaker()
  .then((bread) => {
    console.log(`We got ${bread}`);
    return addButter(bread);
  })
  .then((butter) => {
    console.log(`We got bread and ${butter}`);
  })
  .catch((err) => {
    console.log(`We got error ${err}`);
  });
