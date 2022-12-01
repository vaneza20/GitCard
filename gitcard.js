let campoUsuario = document.querySelector("#usuario-github");
let butao = document.querySelector("#buscar-github");

let avatarUrl = document.querySelector(".avatar");
let avatarImg = avatarUrl.querySelector("img");
let nome = document.querySelector("#nome");
let totalRepositorios = document.querySelectorAll(".status li a strong")[0];
let totalGist = document.querySelectorAll(".status li a strong")[1];
let totalSeguidores = document.querySelectorAll(".status li a strong")[2];

const getGitHubInfo = function () {
    var url = 'https://api.github.com/users/' + campoUsuario.value;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let res = JSON.parse(this.responseText);
            nome.innerText = res.name;
            avatarImg.src = res.avatar_url;
            totalSeguidores.innerText = res.following
            totalRepositorios.innerText = res.public_repos
            totalGist.innerText = res.public_gists
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};

butao.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo();
})