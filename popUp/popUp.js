const innerPopUp = document.querySelector('.inner-popUp');
const popUpDiv = document.querySelector('#popUp');

async function getPopUp(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);
    const data = await response.json();
    console.log(data, 'DATA')
    if (data){
        const results = data;
        innerPopUp.innerHTML = `
            <div class="inner-popUp">
                <div class="popUp-inner">
                    <img src="https://image.tmdb.org/t/p/w500/${results.backdrop_path}" alt="${results.title}">
                    <h4>${results.title}</h4>
                    <p>${results.overview}</p>
                </div>
            </div>
        `;
        popUpDiv.classList.remove('noShow')
    }
}