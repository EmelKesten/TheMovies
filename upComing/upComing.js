async function getUpComing() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
  const data = await response.json();
  if (data) {
    const results = data.results;
    const upComingDiv = document.createElement("div");
    upComingDiv.classList.add("upComing-inner");
    upComingDiv.classList.add("layout");
    upComing.innerHTML = "<h2>Up Coming</h2>";
    upComingDiv.innerHTML = results.map((article) => makeArticle(article)).join("")
    upComing.appendChild(upComingDiv);
    upComingDiv.addEventListener("click", (e) => {
      getPopUp(e.target.id);
    });
  }
}

getUpComing();