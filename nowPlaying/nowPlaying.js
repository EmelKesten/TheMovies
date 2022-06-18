

async function getNowPlaying() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.json();
    if (data){
        const results = data.results;
        const nowPlayingDiv = document.createElement('div');
        nowPlayingDiv.classList.add('nowPlaying-inner');
        nowPlayingDiv.classList.add('layout');
        nowPlaying.innerHTML = '<h2>Now Playing</h2>';
        nowPlayingDiv.innerHTML = `
            ${results.map(article => {
                return `<div class="article" id="${article.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}">
                            <h4>${article.title}</h4>
                        </div>`
            }).join('')}
        `;
        nowPlayingDiv.addEventListener('click', (e) => {
            getPopUp(e.target.id);
        })
        nowPlaying.appendChild(nowPlayingDiv);
    }
}

getNowPlaying();





