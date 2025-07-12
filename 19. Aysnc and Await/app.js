let box = document.querySelector(".container-box");
let form = document.querySelector("#user-input");
let search = document.querySelector("#search");
let submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(search.value);
  search.value = " ";
});

async function getData(value) {
  try {
    const apiKey = `221ad1f091a4e87b75ed4acb95dfdb32`;
    const search = value;
    const url = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        search
      )}`
    );
    const res = await url.json();
    displayData(res.results);
  } catch (error) {
    console.log(error);
  }
}
async function displayData(res) {
  console.log(res);

  const [data] = res;
  const imgPath = `https://image.tmdb.org/t/p/w500`;
  const {
    poster_path,
    title,
    overview: story,
    popularity: rating,
    release_date: date,
  } = data;
  box.innerHTML = " ";
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let heading = document.createElement("h1");
  let para = document.createElement("p");
  let para2 = document.createElement("p");
  let para3 = document.createElement("p");

  heading.innerHTML = `Title: ${title}`;
  para3.innerHTML = `<b>Movie Details:</b> ${story}`;
  para.innerHTML = `<b>Rating:</b> ${rating}`;
  para2.innerHTML = `<b>Relese Date:</b> ${date}`;

  img.setAttribute("src", `${imgPath + poster_path}`);
  div.setAttribute("class", `box`);
  div2.setAttribute("class", `box-2`);

  box.append(div);
  div.append(img);
  div.append(div2);
  div2.append(heading);
  div2.append(para);
  div2.append(para2);
  div2.append(para3);
}
