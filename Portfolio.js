function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("office");
        habilidades[6].classList.add("trgrup");
        habilidades[7].classList.add("ingles");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("coord");
    }
}

window.onscroll = function(){
    efectoSkills();
}