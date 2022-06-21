async function getMostPopular() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
  const data = await response.json();
  if (data) {
    const results = data.results;
    mostPopular.innerHTML = "<h2>Most Popular</h2>";
    const divMostPopuplar = document.createElement("div");
    divMostPopuplar.classList.add("mostPopular-inner");
    divMostPopuplar.classList.add("layout");
    divMostPopuplar.innerHTML = results.map((article)=>makeArticle(article)).join("");
    divMostPopuplar.addEventListener("click", (e) => {
      getPopUp(e.target.id);
    });
    mostPopular.appendChild(divMostPopuplar);
  }
}

getMostPopular();