// Use to call fucntion immediately
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let internetSpeed = Math.floor(Math.random() * 10 + 1);
      if (internetSpeed >= 5) {
        resolve(`Succes: ${data}'s Data Saved in Database`);
      } else {
        reject(`Failure: Connection Not Established for ${data}'s Data`);
      }
    }, 1000);
  });
}

(async function callingFunction() {
  try {
    let firstCall = await saveToDb("Employee");
    console.log(firstCall);
    let secondCall = await saveToDb("Student");
    console.log(secondCall);
    // Or
    console.log(await saveToDb("Manager"));
  } catch (error) {
    console.log(error);
  }
})();

(function () {
  console.log("Hello World!");
})();
