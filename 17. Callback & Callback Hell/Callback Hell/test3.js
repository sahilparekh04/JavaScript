// When we want to execute function step by step or if one execute successfully then after another so we can use callback chaning or callback hell

/*
    S1 - boil water!
    S2 - after water boil, add noodles
    S3 - after noodles cook, add masala
    S4 - after that, serve

    So in that problem statment we do opration one after another means if one function execute successfully then after another function starts executing if any one gets error then after that function no function will execute.
*/

function makingMaggie(callback) {
  console.log("Process of making maggie is start now!");
  const condtion = Math.floor(Math.random() * 5) == 0 ? false : true;
  if (condtion) {
    const water = "Water is boiled";
    setTimeout(() => {
      callback(water);
    }, 1000);
  } else {
    console.log("Water is not boiled yet.");
  }
}

function addNoodles(callback) {
  const condtion = Math.floor(Math.random() * 5) == 0 ? false : true;
  if (condtion) {
    setTimeout(() => {
      const noodles = "Adding Noodles";
      callback(noodles);
    }, 1000);
  } else {
    console.log("We Don't have Noodles to add in water.");
  }
}

function addMasala(callback) {
  const condtion = Math.floor(Math.random() * 5) == 0 ? false : true;
  if (condtion) {
    setTimeout(() => {
      const masala = "Adding Masala";
      callback(masala);
    }, 1000);
  } else {
    console.log("We Don't have masala to add in noodles.");
  }
}

function serving(callback) {
  const condtion = Math.floor(Math.random() * 5) == 0 ? false : true;
  if (condtion) {
    setTimeout(() => {
      const serve = "Maggie is ready to serve in plate";
      callback(serve);
    }, 1000);
  } else {
    console.log("We Don't have plate to serve maggie.");
  }
}

makingMaggie((water) => {
  console.log(water);
  // passing callback function Defination inside 1st(parent) callback function
  addNoodles((noodles) => {
    console.log(`${noodles}`);
    // passing callback function Defination inside 2nd callback function
    addMasala((masala) => {
      console.log(`${masala}`);
      // passing callback function Defination inside 3rd callback function
      serving((maggie) => {
        console.log(`${maggie}`);
      });
    });
  });
});
