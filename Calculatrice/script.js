let nombreAffiche = "";

function addition(a, b) {
  return a + b;
}
function multiplication(a, b) {
  return a * b;
}
function soustraction(a, b) {
  return a - b;
}
function division(a, b) {
  if (a == 0 || b == 0) {
    alert("can't divide by 0");
  } else {
    return a / b;
  }
}

function afficheur() {
  let affichage = document.querySelector(".afficheur");
  affichage.textContent = nombreAffiche;
}
function ajouterNumero(chiffre) {
  nombreAffiche += chiffre;
  afficheur();
}

function ajouterSigne(signe) {
  nombreAffiche += signe;

  afficheur();
}
function suppression() {
  nombreAffiche = "";
  afficheur();
}
function calculResult() {
  let affichage = document.querySelector(".afficheur");
  let nombre = nombreAffiche.split(/[+\-*\/]/);
  let nombre1 = parseFloat(nombre[0]);
  let nombre2 = parseFloat(nombre[1]);

  if (nombreAffiche.includes("+")) {
    affichage.textContent = `=${addition(nombre1, nombre2)}`;
  } else if (nombreAffiche.includes("-")) {
    affichage.textContent = `=${soustraction(nombre1, nombre2)}`;
  } else if (nombreAffiche.includes("*")) {
    multiplication();
    affichage.textContent = `=${multiplication(nombre1, nombre2)}`;
  } else if (nombreAffiche.includes("/")) {
    affichage.textContent = `=${division(nombre1, nombre2)}`;
  } else {
    alert("Non reconnu");
  }
}

ajouterNumero("");
