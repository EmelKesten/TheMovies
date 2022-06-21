txtInput.addEventListener("keypress", (event) => {
  if (txtInput.value.length >= 3) {
    search(txtInput);
  } else {
    content.innerHTML = "";
    getMostPopular();
    getNowPlaying();
    getUpComing();
  }
});

async function search(input) {
  content.innerHTML = "";
  const txtInputValue = input.value;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${txtInputValue}&page=1&include_adult=true`);
  const data = await response.json();
  mostPopular.innerHTML = "";
  nowPlaying.innerHTML = "";
  upComing.innerHTML = "";
  if (data) {
    const results = data.results;
    content.innerHTML = results.map((article) => makeArticle(article)).join("");
    content.addEventListener("click", (e) => {
      getPopUp(e.target.id);
    });
  }
}
