/**
 * --------------------------------------------
 * 1 - Au click sur le bouton "Cacher" :
 *
 * → Cacher le paragraphe
 * → Changer le texte du bouton "Cacher" en "Afficher"
 *
 *
 * Si le bouton est cliqué de nouveau :
 *
 * → Le paragraphe s'affiche de nouveau
 * → Changer le texte du bouton "Afficher" en "Cacher"
 * --------------------------------------------
 */
const allButtons = document.querySelectorAll("button");

allButtons.forEach((Button, Index) => {
  if (Button) {
    Button.id = `button${Index + 1}`;
    console.log(Button);
  }
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", (e) => {
  e.preventDefault();

  const p = document.getElementsByTagName("p");
  console.log(p[0]);
  if (button1.innerHTML !== "Afficher") {
    p[0].style.display = "none";
    button1.innerText = "Afficher";
  } else {
    p[0].style.display = "block";
    button1.innerHTML = "Cacher";
  }
});

const button2 = document.getElementById("button2");

/**
 * --------------------------------------------
 * 2 - Création d'une calculatrice simple :
 *
 * → Créer 3 champs inputs :
 *   - Le premier et le troisième sont de type number et permettent de saisir un nombre (1 et 2 par exemple)
 *   - Le second est de type texte et permet de saisir un opérateur (+, -, *, /)
 *
 * → Créer un bouton qui déclenche le calcul des 2 inputs par l'opérateur
 *
 * →  Afficher le résultat dans le HTML. Tant qu'il n'y a pas de résultat, afficher un petit texte en attente.
 * --------------------------------------------
 */

const divCalculator = document.getElementById("div-calc");
console.log(divCalculator);

const inputNumber = document.getElementById("input-number-1");
console.log(inputNumber);

const inputText = document.getElementById("input-calculator");
console.log(inputText);

const inputNumber2 = document.getElementById("input-number2");
console.log(inputNumber2);

// button.id = button3
const calculatorButton = document.getElementById("button3");
console.log(calculatorButton);

calculatorButton.addEventListener("click", (e) => {
  e.preventDefault;

  if (signe == "+") {
    let sum = parseInt(number1) + parseInt(number2);
    console.log(sum);
  } else if (signe === "-") {
    let subtract = parseInt(number1) - parseInt(number2);
    console.log(subtract);
  } else if (signe === "/") {
    let divide = parseInt(number1) / parseInt(number2);
    console.log(divide);
  } else if (signe === "*") {
    let multiply = parseInt(number1) * parseInt(number2);
    console.log(multiply);
  } else {
    console.log(
      `l valeure ${signe} n'a pas était reconnu veuillez utiliser un oppérateur +,-,/,*`
    );
  }
});

/**
 * --------------------------------------------
 * 3 - Créer un container avec 3 div (sans passer par JS, en HTML/CSS classique). Chaque div propose un produit à acheter avec une image, un titre, un petit paragraphe et un bouton "Acheter 🤓"
 *
 * → Attacher un écouteur d'événément de type "click" sur chaque bouton "Acheter 🤓".
 * → Si une div est cliquée, le produit est posusé dans une propriétée "selectedProducts".
 * → Cette propriété est affichée dans le DOM, et pour chaque nouveau produit sélectionné, le DOM est mis à jour.
 *
 * Le pôle Marketing vous demande d'ajouter un bout de code afin de relever l'intérêt des utilisateurs vis-à-vis des produits proposés sur la e-boutique
 * De votre côté, vous imaginez le procédé suivant : "j'écoute le nombre de fois où l'utilisateur passe sa souris sur la div de l'un des produits"
 *
 * → Attacher un écouteur d'événément de type "mouseover" sur chaque div.
 * → Compter le nombre de fois où la souris de l'utilisateur passe sur chaque div. Dès lors que la souris survole une div, mettre à jour le "nombre de fois où la div X a été survolée" dans l'objet utilisateur
 * --------------------------------------------
 */
const section = document.getElementById("produits");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

console.log(section, card1, card2, card3);
section.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(e.target);
  if (e.target == card1) {
    console.log(card1);
  } else if (e.target == card2) {
    console.log(card2);
  } else if (e.target == card3) {
    console.log(card3);
  }
});
