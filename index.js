let experiencia = 7800;
let nomeDeHeroi = "Jambo";

function nivelDeHeroi(experiencia){
    if (experiencia <= 1000){
        return "Ferro";
    }
    else if (experiencia >= 1001 && experiencia <= 2000){
        return "Bronze";
    }
    else if (experiencia >= 2001 && experiencia <= 5000){
        return "Prata";
    }
    else if (experiencia >= 5001 && experiencia <= 7000){
        return "Ouro"
    }
    else if (experiencia >= 7001 && experiencia <= 8000){
        return "Platina";
    }
    else if (experiencia >= 8001 && experiencia <= 9000){
        return "Ascendente (E fez o Vegeta pirar, pois é mais de 8000)";
    }
    else if (experiencia >= 9001 && experiencia <= 10000){
        return "Imortal"
    }
    else if (experiencia >= 10001){
        return "Radiante"
    }
}

function outputDoHeroi(nomeDeHeroi, experiencia){
    console.log(`${nomeDeHeroi} está no nivel ${nivelDeHeroi(experiencia)}`)
}

outputDoHeroi(nomeDeHeroi, experiencia)