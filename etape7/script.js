
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

// Copie des données initiales
const initialPersons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Compteur du nombre de lignes (let slide 51)
let lignes = 0;
let totalPoints = 0;

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
    totalPoints = totalPoints + points;

    // l'affecter au lieu de 99 (const slide 51)
    const num = lignes;

    // Appeler la fonction d'insertion dans le tableau HTML (appel de fonction slide 45)
    doInsertRowTable(num, nom, prenom, points);
    //appel de update_summary (appel de fonction slide 45)
    update_summary();
}

//update_summary function (fonction slide 45)
function update_summary() { // Récupérer l'élément ayant l'id p1 (getElementById slide 61-64, const slide 51)
    const element_lignes = document.getElementById("p1");

    // Récupérer l'élément ayant l'id p3 (getElementById slide 61-64, const slide 51)
    const element_points = document.getElementById("p3");

    // Afficher le nombre de lignes (innerText slide 90-91)
    element_lignes.innerText = lignes + " ligne(s)";

    // Afficher le total des points (innerText slide 90-91)
    element_points.innerText = "Total point(s)= " + totalPoints;
}


// Fonction qui affiche le tableau persons dans la console (fonction slide 45, console.log slide 33)
function consoleTableau() {
    console.log(persons);
}

// Fonction pour récupérer les nouvelles données (fonction slide 45)
function doNewData() {

    // Récupérer les éléments HTML (getElementById slide 61-64, const slide 51)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Récupérer les valeurs des champs (let slide 51, .value slide 92-93)
    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value);

    // Vérifier que les champs ne sont pas vides (if...else slide 42, opérateurs logiques slide 41, alert slide 116)
    if (
        nom.trim() === "" || prenom.trim() === "" || elt_points.value.trim() === "" || Number.isNaN(points)
    ) {
        alert("Formulaire incomplet !");
    }
    else {

        // Appeler doInsert avec les nouvelles données (appel de fonction slide 45)
        doInsert(nom, prenom, points);

        // Insérer les nouvelles données dans le tableau persons (tableau slide 38, objet slide 39)
        persons.push({ nom, prenom, points });

        // Vider les champs de saisie (.value slide 92-93)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}


function deleteRow() {

    // Étape 1 : Vérifier si le tableau est vide (if slide 42, alert slide 116)
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // Étape 2 : Récupérer le tableau et les cases cochées (const slide 51, querySelector/querySelectorAll slide 76-78)
    const table = document.querySelector("tbody");
    const checkboxes = table.querySelectorAll(
        ".col_chkbox input[type='checkbox']"
    );

    // Étape 3 : Vérifier si aucune checkbox n'est cochée (let slide 51, forEach slide 44, fonction anonyme et callback slides 46-47, .checked slide 92-93, if slide 42, alert slide 116)
    let selection = false;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selection = true;
        }
    });

    if (!selection) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : Demander une confirmation (confirm : même famille que alert, slide 116 ; if slide 42, opérateur ! slide 41)
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) {
        return;
    }

    // Étape 5 : Récupérer toutes les lignes du tableau (const slide 51, querySelectorAll slide 76-78)
    const rows = table.querySelectorAll("tr");

    // Étape 6 : Parcourir les lignes (boucle for slide 44, let slide 51)
    for (let i = rows.length - 1; i >= 0; i--) {

        const checkbox = rows[i].querySelector(
            "input[type='checkbox']"
        );

        if (checkbox.checked) {

            // Récupérer les points dans la 4e cellule (const slide 51, accès par index slide 68)
            const points = parseInt(rows[i].cells[3].textContent);

            // Décrémenter le total des points (opérateurs combinés slide 41)
            totalPoints -= points;

            // Décrémenter le nombre de lignes (opérateurs slide 41)
            lignes--;

            // Supprimer la ligne du DOM (remove() slide 100)
            rows[i].remove();

            // Supprimer la même entrée dans persons (tableau slide 38)
            persons.splice(i, 1);
        }
    }

    // Étape 7 : Mettre à jour le résumé (appel de fonction slide 45)
    update_summary();

    alert("Suppression effectuée !");
}


// Fonctionnalité supplémentaire 1 : sélectionner toutes les cases.
// querySelectorAll et boucle (slides 76-78 et 82).
function selectAllRows() {
    const cases = document.querySelectorAll(".col_chkbox input");
    for (let i = 0; i < cases.length; i++) {
        cases[i].checked = true;
    }
}

// Fonctionnalité supplémentaire 2 : désélectionner toutes les cases.
function deselectAllRows() {
    const cases = document.querySelectorAll(".col_chkbox input");
    for (let i = 0; i < cases.length; i++) {
        cases[i].checked = false;
    }
}


// Fonctionnalité supplémentaire 3 : réinitialiser le tableau aux données initiales.
// removeChild : slides 99-101 ; création/ajout des éléments : slides 103-105.
function resetTable() {
    const tbody = document.querySelector("tbody");
    while (tbody.firstElementChild) {
        tbody.removeChild(tbody.firstElementChild);
    }

    persons.splice(0, persons.length);
    lignes = 0;
    totalPoints = 0;

    for (let i = 0; i < initialPersons.length; i++) {
        const personne = {
            nom: initialPersons[i].nom,
            prenom: initialPersons[i].prenom,
            points: initialPersons[i].points
        };
        persons.push(personne);
        doInsert(personne.nom, personne.prenom, personne.points);
    }

    alert("La liste a été réinitialisée.");
}