const divMostPopular = document.querySelector('#mostPopular-inner');

async function getMostPopular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.json();
    if (data){
        const results = data.results;
        results.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}">
                <h4>${article.title}</h4>
            `;
            divMostPopular.appendChild(articleDiv);
        });
    }
}

getMostPopular();