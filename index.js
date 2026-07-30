let heroName = "SuperDev";
let xpHero = 2001;
let heroLevel = "Ferro";

switch (true) {
    case xpHero < 1001:
        heroLevel = "Ferro";
        break;
    case xpHero < 2001:
        heroLevel = "Bronze";
        break;
    case xpHero < 5001:
        heroLevel = "Prata";
        break;
    case xpHero < 7001:
        heroLevel = "Ouro";
        break;  
    case xpHero < 8001:
        heroLevel = "Platina";
        break;
    case xpHero < 9001:
        heroLevel = "Ascendente";
        break;                 
    case xpHero < 10001:
        heroLevel = "Imortal";
        break;       
    default:
        heroLevel = "Radiante";
        break;
}

console.log("O herói " + heroName + " possui " + xpHero + " de XP e está no nível " + heroLevel);