const txtInput = document.getElementById('txt-input'); 
const content = document.querySelector('#search');
const mostPopular = document.querySelector('#mostPopular');
const nowPlaying = document.querySelector('#nowPlaying');
const upComing = document.querySelector('#upComing');

txtInput.addEventListener("keypress", (event) => {
    if (txtInput.value.length >= 3) {
        search(txtInput);
    }
    else if(txtInput.value.length === 0) {
        content.innerHTML = '';
        mostPopular();
        nowPlaying();
        upComing();
    }
     
});

async function search(input) {
    content.innerHTML = '';
    const txtInputValue = input.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${txtInputValue}&page=1&include_adult=true`);
    const data = await response.json();
    mostPopular.innerHTML = '';
    nowPlaying.innerHTML = '';
    upComing.innerHTML = '';
    if (data){
        const results = data.results;
        results.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="Not able to get poster">
                <h4>${article.title}</h4>
            `;
            content.appendChild(articleDiv);
        }); 
    }
}

