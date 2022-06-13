const txtInput = document.getElementById('txt-input'); 

txtInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
});

async function search() {
    const txtInputValue = txtInput.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${txtInputValue}&page=1&include_adult=true`);
    const data = await response.json();
    console.log(data);
    if (data){
        const results = data.results;
        results.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}">
                <h4>${article.title}</h4>
            `;
            divMostPopular.innerHTML = '';
            divMostPopular.appendChild(articleDiv);
        }); 
    }
}

