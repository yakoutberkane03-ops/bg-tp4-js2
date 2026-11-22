"use strict";//use strict slide 51
// Fonction slide 45
function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau (querySelector slide 76-78)
    const table = document.querySelector("tbody");

    // Créer un élément de type tr (const slide 51, createElement slide 104)
    const row = document.createElement("tr");

    // Affecter a l'element row la valeur row a son attribut class (setAttribute slide 106-107)
    row.setAttribute("class", "row");

    // Créer les cinq element td (colonnes) (const slide 51, createElement slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu des colonnes avec params de la fonction (innerText slide 90-91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Créer une checkbox dans la dernière colonne (createElement slide 104, setAttribute slide 106-107, appendChild slide 103)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.appendChild(checkbox);

    // Affecter les classes aux colonnes (setAttribute slide 106-107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne (appendChild slide 103)
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    // Ajouter la ligne au tableau (appendChild slide 103)
    table.appendChild(row);
}

// Tableau contenant les objets persons (const slide 51, tableau d'objets slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Compteur du nombre de lignes (let slide 51)
let lignes = 0;

// Appel de la fonction init() (appel de fonction slide 45)
init();

// Fonction qui parcourt le tableau persons (fonction slide 45)
function init() {

    // Boucle for...of pour parcourir les objets du tableau (boucle slide 44)
    for (const person of persons) {

        // Appeler doInsert avec les données de l'objet courant (accès aux propriétés d'un objet slide 39, appel de fonction slide 45)
        doInsert(person.nom, person.prenom, person.points);
    }
}

// Fonction qui prépare l'insertion d'une personne (fonction slide 45)
function doInsert(nom, prenom, points) {

    // Incrémenter lignes (opérateurs slide 41)
    lignes = lignes + 1;

    // l'affecter au lieu de 99 (const slide 51)
    const num = lignes;

    // Appeler la fonction d'insertion dans le tableau HTML (appel de fonction slide 45)
    doInsertRowTable(num, nom, prenom, points);
}

// Fonction qui affiche le tableau persons dans la console (fonction slide 45, console.log slide 33)
function consoleTableau() {
    console.log(persons);
}
  








