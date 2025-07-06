function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if (internetSpeed >= 5) {
      resolve(`Succes: ${data}'s Data Saved in Database`);
    } else {
      reject(`Failure: Connection Not Established for ${data}'s Data`);
    }
  });
}

async function callingFunction() {
  try {
    console.log(await saveToDb("Employee"));
    console.log(await saveToDb("Student"));
    console.log(await saveToDb("Teacher"));
    console.log(await saveToDb("Manager"));
  } catch (error) {
    console.log(error);
  }
}

callingFunction();
