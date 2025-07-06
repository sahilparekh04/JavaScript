function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);
    if (internetSpeed >= 5) {
      resolve(data);
    } else {
      reject(`Failure: Connection Not Established for ${data}'s Data`);
    }
  });
}

// saveToDb("Employee")
//   .then((response) => {
//     console.log(`Succes: ${response} Data Saved in Database`);

//     saveToDb("Student")
//       .then((response) => {
//         console.log(`Succes: ${response} Data Saved in Database`);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Or

saveToDb("Employee")
  .then((response) => {
    console.log(`Succes: ${response} Data Saved in Database`);

    return saveToDb("Student");
  })
  .then((response) => {
    console.log(`Succes: ${response} Data Saved in Database`);

    return saveToDb("Sahil");
  })
  .then((response) => {
    console.log(`Succes: ${response} Data Saved in Database`);

    return saveToDb("Yash");
  })
  .then((response) => {
    console.log(`Succes: ${response} Data Saved in Database`);

    return saveToDb("Vivek");
  })
  .catch((error) => {
    console.log(error);
  });
