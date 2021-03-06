const popUpDiv = document.querySelector("#popUp");

async function getPopUp(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
  );
  const data = await response.json();
  const vidResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
  );
  const vidData = await vidResponse.json();
  if (data) {
    const results = data;
    popUpDiv.innerHTML = `
            <div class="popUp-inner" style="
                background-image: url(https://image.tmdb.org/t/p/w500/${results.backdrop_path});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            ">
                    <button id="close">X</button>
                    <h4>${results.title}</h4>
                    <p>${results.overview}</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${vidData.results[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    document.querySelector("#close").addEventListener("click", () => {
      popUpDiv.innerHTML = "";
      popUpDiv.classList.add("noShow");
    });
    popUpDiv.addEventListener("click", () => {
      popUpDiv.innerHTML = "";
      popUpDiv.classList.add("noShow");
    });
    popUpDiv.classList.remove("noShow");
  }
}
