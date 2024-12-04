/**
 * --------------------------------
 * 1 - Via JS, renseigner la valeur des attributs src et alt des balises <img>
 * Toujours via JS, leur fixer une longueur de 100%.
 * --------------------------------
 */

const images = document.querySelectorAll("img");
//console.log(images);

for (let i = 0; i < images.length; i++) {
  const image = images[i];

  if (image) {
    image.alt = "Super image";
    image.src = href =
      "https://cdn.pixabay.com/photo/2019/06/04/20/33/dog-4252274_1280.jpg";
    image.setAttribute("style", "width:100%");
    //console.log(image);
  }
}

// Voici un bout de code : ne pas y toucher (vraiment) 🤓
const titleList = ["h1", "h2", "h3", "h4", "h5", "h6"];
/**
 * --------------------------------
 * 2 - Via une boucle (sur le tableau ci-dessus), récupérer toutes les balises titres de la page.
 * → Leur ajouter (à toutes) la classe "title"
 * → Si c'est une balise h1, ajouter en plus la classe "title1"
 * → Si c'est une balise h2, ajouter en plus la classe "title2"
 * → Si c'est une balise h3, ajouter en plus la classe "title3"
 * --------------------------------
 */

for (let i = 0; i < titleList.length; i++) {
  const titles = document.querySelectorAll(titleList[i]);

  titles.forEach((title) => {
    title.classList.add(`titles${i + 1}`);
    //console.log(title);
  });
}

/**
 * --------------------------------
 * 3 - Ajouter les classes suivantes à certains éléments HTML (à vous d'analyser lesquels) :
 * → "section2"
 * → "card-container"
 * → "card"
 * --------------------------------
 */
const sections = document.querySelectorAll("section"); // Tableau.length = 2
sections[1].className = "section2";
//console.log(sections[1]);

const div = document.querySelectorAll("div", sections[1]);
//console.log(div);

function foundDivAndAddClassName() {
  for (let i = 0; i < div.length; i++) {
    const elementDiv = div[i];

    if (i === 0) {
      div[i].className = "card-container";
    } else {
      elementDiv.className = "card";
    }
  }
  return div;
}
//console.log();
foundDivAndAddClassName();
/**
 * --------------------------------
 * 4 - Via JS :
 * → Changer la couleur de fond de la balise <main></main>
 *
 * Classe "section2" :
 * → Lui ajouter une couleur de fond, un padding et un margin
 * → La passer en flex et en column
 *
 * * Classe "card-container" :
 * → Lui ajouter une bordure, un padding et un margin
 * → La passer en flex et aligner ses éléments enfants selon l'axe horizontal. Il doit y avoir "un peu d'espace entre chaque enfant"
 *
 * Classe "card"
 * → Lui ajouter une bordure, un padding et un margin
 * → La passer en flex et en column
 * → Centrer ses éléments enfants par rapport à l'axe vertical
 *
 * Bien. Vous vous êtes entraînés à manipuler le CSS depuis Javascript.
 * Maintenant que vous êtes bons, sentez-vous libres d'ajouter un peu de CSS directement depuis la feuille CSS de l'exercice.
 * --------------------------------
 */

const main = document.querySelector("main");
main.style.backgroundColor = "salmon"; // ===> Hi hi XD
//console.log(main);

sections[1].style.backgroundColor = "lavender";

div[0].setAttribute(
  "style",
  " margin : 15px; padding : 25px; display : flex;flex-direction:column; align-item : center; justify-content : space-between; border: solid 2px black"
);
//console.log(div[0]);

const cards = document.querySelectorAll(".card");
//console.log(cards);

cards.forEach((cards) => {
  cards.setAttribute(
    "style",
    "border: solid 2px black; border-radius:20px; margin:5px; padding: 10px; align-item:center;display:flex; flex-direction:column; "
  );
  console.log(cards);
});

/**
 * --------------------------------
 * 5 - Retirer la classe "card" du second et du troisième élément possédant cette classe.
 * Ça casse tout n'est-ce pas ? 🤓 En vrai ça passe mais j'aime pas trop.
 * → Remettre la classe "card" sur ces deux éléments
 * --------------------------------
 */
cards.forEach((idCards) => {
  if (idCards !== div[1] && div[2]) {
    idCards.classList.remove("card");
  }
});
/**
 * --------------------------------
 * 6 - Via JS, créer une <div> comme celles déjà présentes dans le HTML : avec sa classe, son style et ses éléments enfants.
 * → Injecter cette <div> en tant que 4ème enfant de "card-container"
 * Cool n'est-ce pas ? 🤓
 * --------------------------------
 */

const newDivContainerCards = document.createElement("div");
newDivContainerCards.className = "container-cards";
sections[1].appendChild(newDivContainerCards);

const newDivCard = document.createElement("div");
newDivCard.className = "card";
newDivCard.setAttribute(
  "style",
  "border: solid 2px black; border-radius:20px; margin:5px; padding: 10px; align-item:center;display:flex; flex-direction:column; "
);
newDivContainerCards.appendChild(newDivCard);

const newImgOfNewCard = document.createElement("img");
newImgOfNewCard.src = href =
  "https://cdn.pixabay.com/photo/2019/06/04/20/33/dog-4252274_1280.jpg";
newImgOfNewCard.setAttribute("style", "width:100%");
newDivCard.appendChild(newImgOfNewCard);

const newH3OfNewCard = document.createElement("h3");
const newPOfNewCard = document.createElement("p");
newPOfNewCard.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste deleniti rem ex aut incidunt. Animi corrupti a nesciunt quas assumenda repudiandae consectetur similique dolorem error nulla, quibusdam placeat necessitatibus.";
4;
newDivCard.appendChild(newH3OfNewCard);

const newButton = document.createElement("button");
newButton.innerText = "Click stp";
newDivCard.appendChild(newButton);
