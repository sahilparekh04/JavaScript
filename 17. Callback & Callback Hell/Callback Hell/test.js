function saveToDb(data, callback) {
  let internetSpeed = Math.floor(Math.random() * 10 + 1);

  if (internetSpeed >= 5) {
    let success = "success";
    callback(success);
  } else {
    let failure = "error";
    callback(failure);
  }
}

saveToDb("Hello World!", (result) => {
  if (result == "success") {
    console.log("Success: Data Saved in Database");

    saveToDb("Sahil", (result) => {
      if (result == "success") {
        console.log("Success: Data Saved in Database");
      } else {
        console.log("Error: Connection Not Established!");
      }
    });
  } else {
    console.log("Error: Connection Not Established!");
  }
});
