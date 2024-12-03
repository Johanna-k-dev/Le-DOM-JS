const contrainerSection = document.querySelectorAll("section");
console.log(contrainerSection);

for (let i = 0; i < contrainerSection.length; i++) {
    const element = contrainerSection[i];
    console.log(element);
   
    if (i=== 1) {

        for (let i = 0; i <= 3; i++) {
            
            // création d'éléments
            const div = document.createElement("div")
            div.id =`Div-${i+1}`;
            div.style.backgroundColor= "yellow";
            contrainerSection[1].appendChild(div);
            console.log(div);
            
            
            const image = document.createElement('img');
            image.id = `image-${i+1}`;
            div.appendChild(image);

            console.log(image);
            
            const h3 = document.createElement('h3');
            h3.innerText= `Titre-${i+1}`;
            div.appendChild(h3)
            console.log(h3);
            

            const p = document.createElement("p");
            p.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste deleniti rem ex aut incidunt. Animi corrupti a nesciunt quas assumenda repudiandae consectetur similique dolorem error nulla, quibusdam placeat necessitatibus."
            p.className= `p-${i+1}`;
            div.appendChild(p);
            console.log(p);
            

            
            const button= document.createElement("button");
            contrainerSection[1].appendChild(button);
            button.className= `Bouton ${i+1}`;
            console.log(button);
           
            const buttons =document.querySelectorAll('button')
            console.log(buttons);
            
        }  
    }
}
//finir Modifier styles