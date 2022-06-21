const api_key = "ac611aa60fbb0355792b075ff8337fbe";

const txtInput = document.getElementById("txt-input");
const content = document.querySelector("#search");
const mostPopular = document.querySelector("#mostPopular");
const nowPlaying = document.querySelector("#nowPlaying");
const upComing = document.querySelector("#upComing");

function makeArticle(article){
    const div = document.createElement("div");
    div.classList.add("article");
    div.id = article.id;
    div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${article.poster_path}" id="${article.id}" alt="${article.title}">
        <h4>${article.title}</h4>
    `;
    return div.outerHTML;
}