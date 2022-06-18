const popUpDiv = document.querySelector('#popUp');

async function getPopUp(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);
    const data = await response.json();
    console.log(id, 'id');
    if (data){
        const results = data;
        popUpDiv.innerHTML = `
            <div class="popUp-inner" style="
                background-image: url(https://image.tmdb.org/t/p/w500/${results.backdrop_path});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            ">
                    <h4>${results.title}</h4>
                    <p>${results.overview}</p>
                    <button id="close">X</button>
            </div>
        `;
        document.querySelector('#close').addEventListener('click', () => {
            popUpDiv.innerHTML = '';
            popUpDiv.classList.add('noShow')
        })
        popUpDiv.classList.remove('noShow')
    }
}