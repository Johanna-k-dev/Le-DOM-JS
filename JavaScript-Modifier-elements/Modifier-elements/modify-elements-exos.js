/**
   * -------------------------------------------------------
   * 1 - Créer une div :
   * → qui possède un titre de niveau 3 avec un id et du texte
   * → qui possède un paragraphe avec du texte
   * → qui possède un bouton avec une classe et un texte
   * 
   * Ajouter cette div à la section "hero-section"
   * -------------------------------------------------------
*/

const createDiv = document.createElement("div");
const createTitleH3 = document.createElement("h3");
createTitleH3.innerText="123 soleil";
const createP=document.createElement("p");
const createButton = document.createElement("button");
const containerEelement = document.querySelector("#hero-section");
console.log(containerEelement);

containerEelement.appendChild(createDiv);
createDiv.appendChild(createTitleH3);
createDiv.appendChild(createP);
createP.appendChild(createButton);



/**
   * -------------------------------------------------------
   * 2 - Écrire une fonction qui créer et retourne un élément HTML "li" avec du texte.
   * Exemple : l'execution de la fonction     createMenuItem("Item 1")       retourne :       <li>Item 1</li>
   * → Créer ainsi 5 puces et les insérer dans la liste à puces "menu"
   * -------------------------------------------------------
*/

const menu = document.getElementById("menu")

const body = document.getElementsByTagName("body");

   function cerateMenuItem() {
      if (menu,true) {

      for (let i = 0; i <= 5; i++) {  

         const MenuItem = document.createElement("li");
         MenuItem.innerText =`Item${i+1}`;
         menu.appendChild(MenuItem);
         
      };  
   }

console.log(menu);
}
cerateMenuItem()

/**
   * -------------------------------------------------------
   * 3 - Créer un second menu (via JS uniquement):
   * → La liste à puces aura pour id "menu2" et comportera 3 éléments
   * -------------------------------------------------------
*/

const header = document.getElementsByTagName('header')[0];


if( header,true){

   const menu2 = document.createElement('ul');
   menu2.id = "menu2";
   header.appendChild(menu2); 

   if (menu2,true ){
   
      for (let i = 0; i <= 2; i++) {
         const li =document.createElement('li');
         li.innerHTML=`menu2 Item ${i+1}`;
         menu2.appendChild(li);
         
      } 
   }
   console.log(menu2);
   
}


/**
   * -------------------------------------------------------
   * 4 - Déplacer le premier et le dernier élément de la première liste (menu) dans la seconde liste (menu2)
   * -------------------------------------------------------
*/


menu2.appendChild(menu.firstElementChild)
menu2.appendChild(menu.lastChild)
console.log(menu2);


/**
   * -------------------------------------------------------
   * 5 - Changer le texte des puces qui viennent d'être déplacées
   * -------------------------------------------------------
*/
const nexInnerTextItem2 = menu2.lastChild;
const newInnerTextItem1 = nexInnerTextItem2.previousElementSibling;

newInnerTextItem1.innerText = "Modifié!";
nexInnerTextItem2.innerText = "Modifié!";

console.log(menu2);

/**
   * -------------------------------------------------------
   * 6 - Supprimer le titre de niveau 1 qui n'a rien à faire dans le <head></head> et dont l'id est scandaleux 🤓
   * -------------------------------------------------------
*/
const head = document.getElementsByTagName("head")[0]; 
head.removeChild(head.lastChild);
console.log(head);



// Voici un bout de code : ne pas toucher ! 
const elementListToCreate = [
   {
      name: "section",
      times: 3
   },
   {
      name: "div",
      times: 3
   },
   {
      name: "p",
      times: 1
   },
   {
      name: "span",
      times: 3
   },
]
/**
   * -------------------------------------------------------
   * 7 - Créer une boucle qui permet de créer et d'injecter dans le body les éléments du tableau un nombre X de fois. 
   * Chaque élément est l'enfant du précédent.
   * Exemple (basé sur le tableau ci-dessus) : il faut créer 3 sections. Chaque section possède 3 div. Chaque div possède 3 paragraphes (avec du texte). Chaque paragraphe possède 3 spans (avec du texte et une classe, la même pour chaque span)
   * -------------------------------------------------------
*/

for (let i = 0; i < elementListToCreate.length; i++) {

   const tableElements =elementListToCreate[i];
   const body = document.body;

   console.log(tableElements);

   if (tableElements.name === "section") {

      for (let i = 0; i <= 2; i++) {
         
         const section = document.createElement("section");
         section.className=`section`;
         document.body.appendChild(section);
         console.log(section);
         
      }
 
   }else if (tableElements.name === "div"){

      for (let i = 0; i <= 2; i++) {
         const section = document.getElementsByClassName("section")   
         const div= document.createElement("div");
         div.className("div");
         section[i].appendChild(div);
         console.log(div);
         

      }

   }else if (tableElements.name === "p"){
      
      const div = document.getElementsByClassName("div")
      const p =document.createElement("p")
      p.className= "p";
      p.innerText= "il y a du texte ici !";
      div.appendChild(p);
      console.log(p);
      

 }else{

   for (let i = 0; i <=2; i++) {

      const p =document.getElementsByClassName("p")
      const span = document.createElement("span");
      span.innerText="il y a du texte dans le span"
      p.appendChild(span);
   }
   
   console.log(span);
   
 }
   
   
}

/**
   * -------------------------------------------------------
   * 8 - Sélectionner tous les spans nouvellement créés. Modifier leur texte via une boucle. Chaque span doit afficher "je suis le span n°X"
   * Exemple : 
   * → Le premier span doit afficher "je suis le span n°1"
   * → Le second span doit afficher "je suis le span n°2"
   * → etc... jusqu'au span n°27 🤯
   * -------------------------------------------------------
*/

