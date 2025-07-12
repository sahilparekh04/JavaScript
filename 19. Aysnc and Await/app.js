let box = document.querySelector(".container-box");
let form = document.querySelector("#user-input");
let search = document.querySelector("#search");
let submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(search.value);
  search.value = " ";
});
async function page(params) {
  try {
    const imgPath = `https://image.tmdb.org/t/p/w500`;
    const url = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`
    );
    const data = await url.json();
    const page = data.results;
    for (const obj of page) {
      // console.log(obj);

      const {
        poster_path,
        title,
        overview: story,
        popularity: rating,
        release_date: date,
      } = obj;

      let div = document.createElement("div");
      let div2 = document.createElement("div");
      let img = document.createElement("img");
      let heading = document.createElement("h1");
      let para = document.createElement("p");
      let para2 = document.createElement("p");
      let para3 = document.createElement("p");

      heading.innerHTML = `Title: ${title}`;
      para.innerHTML = `<b>Rating:</b> ${rating}`;
      para2.innerHTML = `<b>Relese Date:</b> ${date}`;
      para3.innerHTML = `<b>Movie Details:</b> ${story}`;

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
  } catch (error) {
    console.log(error);
  }
}
page();

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
    displayData(res);
  } catch (error) {
    console.log(error);
  }
}
async function displayData(res) {
  console.log(res);

  const [data] = res.results;
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
