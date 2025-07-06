function sandwitchMaker(callback) {
  setTimeout(() => {
    const bread = "Bread";
    callback(bread);
  }, 1000);
}

function addButter(bread, callback) {
  setTimeout(() => {
    const butter = bread + "+Butter";
    callback(butter);
  }, 1000);
}

function addVeggies(butter, callback) {
  setTimeout(() => {
    const veggies = butter + "+Veggies";
    callback(veggies);
  }, 1000);
}

function addCheese(veg, callback) {
  setTimeout(() => {
    const cheese = veg + "+Cheese";
    callback(cheese);
  }, 1000);
}

function closeSandwitch(cheese, callback) {
  setTimeout(() => {
    const closeSandwitch = cheese + "+close";
    callback(closeSandwitch);
  }, 1000);
}

sandwitchMaker((bread) => {
  console.log(`We Get ${bread}`);
  addButter(bread, (butter) => {
    console.log(`We Get ${butter}`);
    addVeggies(butter, (veggie) => {
      console.log(`We get ${veggie}`);
      addCheese(veggie, (cheese) => {
        console.log(`We get ${cheese}`);
        closeSandwitch(cheese, (close) => {
          console.log(`Now We can ${close} Sandwitch.`);
          console.log("Sandwitch is ready now.");
        });
      });
    });
  });
});
