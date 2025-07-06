function getData() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m"
  )
    .then((r) => {
      let data = r.json();
      return data;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();

// function getData() {
//   fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m"
//   )
//     .then((r) => r.json()) // return the Promise from r.json()
//     .then((res) => {
//       console.log(res); // res now has the parsed JSON object
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getData();
