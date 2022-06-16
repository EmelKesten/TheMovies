const divMostPop = document.querySelector('#mostPopular');

async function getMostPopular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
    const data = await response.json();
    if (data){
        const results = data.results;
        divMostPop.innerHTML = '<h2>Most Popular</h2>';
        const divMostPopuplar = document.createElement('div');
        divMostPopuplar.classList.add('mostPopular-inner');
        divMostPopuplar.classList.add('layout');
        divMostPopuplar.innerHTML = `
            ${results.map(article => {
                const div = document.createElement('div');
                div.classList.add('article');
                div.id = article.id;
                div.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" id="${article.id}" alt="${article.title}">
                    <h4>${article.title}</h4>
                `;
                div.addEventListener('click', () => {
                    getPopUp(article.id);
                })
                return div.outerHTML;
            }).join('')
        } 
        `;
        divMostPopuplar.addEventListener('click', (e) => {
            getPopUp(e.target.id);
        })
        divMostPop.appendChild(divMostPopuplar);
    }
}

getMostPopular();