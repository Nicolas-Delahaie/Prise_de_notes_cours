
<script type="text/javascript" src="index.js" async defer></script>     
// OU <script language="javascript" type="text/javascript"></script>    //Dans le fichier html (de preference a la fin)
          

//------- AFFICHAGE -------
console.log("coucou");                                                  //Pour afficher dans la console le parametre
alert("coucou");                                                        //Pour afficher en pop-up le parametre
res = confirm("Message a valider");                                     //Pour afficher en popup un message a valider
res = prompt("Saisie", "Votre nom");                                    //Pour afficher une zone de saisie


// ------- ELEMENTS ------- 
//un element est un arbre. Il peut etre une feuille ou bien un noeud que l'on peut manipuler a l'aide des methodes suivantes
//Recuperer des elements
const element = document.getElementById('element_id');                  //Recupere l element precis correspondants a l ID en parametre
const element = document.querySelector("#myId p.article > a");          //Recupere le premier element correspondants a la requete en parametre. Ici : recherche dans l'élément ayant pour id  #myId , les éléments de type  <p>  qui ont pour classe  article , afin de récupérer le lien (  <a>  ) qui est un enfant direct (pas des enfants de ses enfants).
const elements = document.querySelectorAll("#myId p.article > a");      //Recupere un tableau des elements correspondants a la requete en parametre. Ici : recherche dans l'élément ayant pour id  #myId , les éléments de type  <p>  qui ont pour classe  article , afin de récupérer le lien (  <a>  ) qui est un enfant direct (pas des enfants de ses enfants).
const elements = document.getElementsByClassName('elements_class');     //Recupere un tableau des elements correspondants a la classe en parametre
const elements = document.getElementsByTagName('elements_tag');         //Recupere un tableau des elements correspondants a la balise en parametre
//Naviguer dans l element
element.children;                                                       //retourne la liste des enfants de cet element
element.parentElement;                                                  //retourne l element parent de celui-ci 
element.nextElementSibling;                                             //retourne l element suivant de meme niveau
element.previousElementSibling;                                         //retourne l element precedent de meme niveau
element.children ("element_id");                                        //comme .children mais ayant pour id 
element.parentElement ("element_id");                                   //comme .parentElement mais ayant pour id 
element.nextElementSibling ("element_id");                              //comme .nextElementSibling mais ayant pour id 
element.previousElementSibling ("element_id");                          //comme .previousElementSibling mais ayant pour id 
//Modifier des elements
newElement = document.createElement("div");                             //Cree un nouvel element orphelin
elementParent.appendChild(newElement);                                  //Assigne l element a un parent
elementParent.insertBefore(newElement, elmtSuivant);
elementParent.removeChild(element);       
elementParent.replaceChild(element, newElement);


// ------- ATTRIBUTS HTML -------
//Attributs
element.getAttribute("attribut")    
element.setAttribute("src", "image.png");
element.removeAttribute("attribut");
//Specifique : Classes
element.classList.add("element_id", "element2_id");
element.classList.remove("element_id", "element2_id");
element.classList.replace("old_element_id", "new_element_id");
element.classList.contains("element_id");


// ------- STYLE -------
element.style.propriete_css = '#000';                                   //Permet de modifier une propriete css (.style a une propriete pour chaque style css existant)


// ------- CONTENU -------
element.innerHTML;                                                      //Contenu html excluant l element      
element.outerHTML                                                       //Contenu html incluant l element
element.textContent;                                                    //Contenu string de l element


// ------- EVENEMENTS ------- 
element.addEventListener("event", fonctionCallback);                //Ecoute un evenement ("click", "mousemove", "mouseevent", "change", ...) et lance la fonction lorsqu il a lieu
element.preventDefault();                                               //Retire le comportement par default de l element
element.stopPropagation();                                              //Empeche le signal d un element de remonter a son parent
evenement.clientX;                                                      //Position de la souris dans les coordonnées locales (contenu du DOM)
evenement.offsetX;                                                      //Position de la souris par rapport à l'élément sur lequel on écoute l'événement
evenement.pageX;                                                        //Position de la souris par rapport au document entier
evenement.screenX;                                                      //Position de la souris par rapport à la fenêtre du navigateur
evenement.movementX;                                                    //Position de la souris par rapportà la position de la souris lors du dernier événement  mousemove
evenement.target;                                                       //Element sur lequel s'est produit l evenement


//------- REQUETES ------- 
fetch("http://url-service-web.com/api/users")                           //Envoie une requete
.then(function(res) {})                                                 //Verifie que la requete s est bien deroulee
.then(function(value) {})                                               //Recupere la valeur retournee en JSON
.catch(function(err) {});     


//[] est une liste, {} est un dictionnaire
formatJSON = {
    "name": "Mon contenu",
    "id": 1234,
    "message": "Voici mon contenu",
    "author": {
        "name": "John"
    },
    "comments": [
        {
            "id": 45,
            "message": "Commentaire 1"
        },
        {
            id: 46,
            "message": "Commentaire 2"
        }
    ]
}
