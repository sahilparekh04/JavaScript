function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if (internetSpeed >= 5) {
      resolve(data);
    } else {
      reject("Failure: Connection Not Established");
    }
  });
}

saveToDb("Employee")
  .then((response) => {
    console.log(`Succes: ${response} Data Saved in Database`);
  })
  .catch((error) => {
    console.log(error);
  });
