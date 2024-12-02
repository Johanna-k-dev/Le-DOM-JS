/**
   * -------------------------------------------------------
   * 1 - Récupérer (par les 2 méthodes différentes) la section "nos services" : 
   * → par son id 
   * → par son nom de balise
   * -------------------------------------------------------
*/
console.log("Exercice 1");

const ourServicesSection = document.getElementById('our-services');

console.log(ourServicesSection);

/**
   * -------------------------------------------------------
   * 2 - Récupérer les 2 inputs par leur id
   * → Afficher leur valeur (value) dans la console
   * -------------------------------------------------------
*/
console.log("Exercice 2");

const input1 = document.getElementById('great');
const input1Value = input1.value;
const input2 = document.getElementById('not-great');
const input2Value = input2.value;
console.log(`Value input1:  ${input1Value} Value input2: ${input2Value}`);

/**
   * -------------------------------------------------------
   * 3 - Récupérer le titre de niveau 3 de la seconde division de la seconde section
   * → afficher la valeur de son texte dans la console
   * -------------------------------------------------------
*/
console.log("Exercice 3");

const sections = document.querySelectorAll('section');  
const divSecondSection = sections[1].querySelectorAll('div');  
const h3SecondDiv = divSecondSection[1].querySelector('h3');  
console.log(h3SecondDiv.textContent); 

/**
   * -------------------------------------------------------
   * 4 - Il est possible de récupérer un élément qui possède plusieurs classes. Récupérer tous les éléments :
   * → qui partagent la classe :   "btn"
   * → qui partagent la classe :   "cta-btn"
   * → qui partagent la classe :   "cta-primary"
   * → qui partagent la classe :   "cta-secondary"
   * → qui partagent les classes : "cta-btn cta-primary"
   * → qui partagent les classes : "btn cta-btn cta-secondary"
   * 
   * → Les afficher dans la console
   * → Via JS, compter le nombre de fois où la classe "btn" est présente
   * -------------------------------------------------------
*/

console.log("Exercice 4");
// Selection de toutes les classes

const btnClassElement =document.getElementsByClassName('btn');
const ctaBtnClassElement =document.getElementsByClassName('cta-btn');
const ctaPrimaryClassElement =document.getElementsByClassName('cta-primary');
const ctaSecondaryClassElement=document.getElementsByClassName('cta-secondary');
const ctaBtnCtaPrimaryClassElement =document.getElementsByClassName('cta-btn','cta-primary');
const btnCtaBtnCtaSecondaryClassElement =document.getElementsByClassName('btn','cta-btn','cta-secondary');

// Initialiser un compteur btn

let btnCounter = btnClassElement.length;

console.log(btnCounter);
console.log(ctaBtnCtaPrimaryClassElement);



/**
   * -------------------------------------------------------
   * 5 - Récupérer tous les paragraphes. Via une boucle, les afficher dans la console
   * -------------------------------------------------------
*/
console.log("Exercice 5");
const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++) {
   console.log(p[i]);
}



/**
   * -------------------------------------------------------
   * 6 - Récupérer et afficher les éléments suivants dans la console : 
   * → le parent direct de la première section
   * → le premier enfant de la première section
   * → le dernier enfant de la première section
   * → le frère précédent de la section "nos services"
   * → le frère suivant de la section "nos services"
   * 
   * -------------------------------------------------------
*/

console.log("Exercice 6");


const FirstSection = sections[0];
console.log(FirstSection.parentElement);
console.log(FirstSection.firstChild);
console.log(FirstSection.lastChild);
console.log(ourServicesSection.previousElementSibling);
console.log(ourServicesSection.nextElementSibling);


/**
   * -------------------------------------------------------
   * 7 - Créer une fonction qui permette de compter le nombre de fois "où la balise X apparaît".
   * Compter ensuite le nombre de fois où : 
   * la balise HTML h1 apparaît
   * la balise HTML h2 apparaît
   * la balise HTML h3 apparaît
   * la balise HTML p apparaît
   * la balise HTML section apparaît
   * la balise HTML div apparaît
   * → Calculer la somme totale de ces occurences et afficher le résultat dans la console
   * -------------------------------------------------------
*/

console.log("Exercice 7");
//Selectionner les balises

const h1 = document.querySelectorAll('h1');
const h2  = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
//const p = document.querySelectorAll('p'); (déclarées plus haut)
//const sections = document.querySelectorAll('section');
const div = document.querySelectorAll('div');

// Initialiser et formater les donées

const elementsSearch = [
{
   name: "h1",
   length: h1.length
},
{
   name:  "h2",
   length:h2.length
},{
   name:"h3"  ,
   length:h3.length
},{
   name: "p",
   length:p.length
},{
   name: "sections" ,
   length:sections.length
},{
   name: "div" ,
   length:div.length
}];
   
console.log(elementsSearch);
function elementsDomCounter() {
   //Boucle

   for (let i = 0; i < elementsSearch.length; i++) {

      const element = elementsSearch[i];
      
      console.log(`Il y a ${element.length} éléments ${element.name}.`);
         
   }
   
   const totalElements = elementsSearch.reduce((sum, element) => sum + element.length, 0);
   console.log(`La somme totale des longueurs est : ${totalElements}`)

}
elementsDomCounter()
 


