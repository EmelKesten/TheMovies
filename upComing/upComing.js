async function getUpComing() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.json();
    if (data){
        const results = data.results;
        const upComingDiv = document.createElement('div');
        upComingDiv.classList.add('upComing-inner');
        upComingDiv.classList.add('layout');
        upComing.innerHTML = '<h2>Up Coming</h2>';
        upComingDiv.innerHTML = `
            ${results.map(article => {
                return `<div class="article"  id="${article.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}">
                            <h4>${article.title}</h4>
                        </div>`
            }).join('')}
        `;
        upComing.appendChild(upComingDiv);
        upComing.addEventListener('click', (e) => {
            getPopUp(e.target.id);
        })
    }
}

getUpComing();