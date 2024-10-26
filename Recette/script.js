let createButton = document.getElementById("create");

function createRecipe() {

let errorTitle=document.querySelector('.title')
let errorIngredient=document.querySelector('.ingredient')
let errorStep=document.querySelector('.step')




  let titleValue = document.getElementById("recipe_title").value;
  let titleInput = document.getElementById("recipe_title");
  let ingredientValue = document.getElementById("recipe_ingredient").value;
  let ingredientInput = document.getElementById("recipe_ingredient");
  let stepValue = document.getElementById("recipe_step").value;
  let stepInput = document.getElementById("recipe_step");
  let storedRecipe = localStorage.getItem("Recipe");
  let parsedStoredRecipe=JSON.parse(storedRecipe)
if (parsedStoredRecipe==null){
parsedStoredRecipe=[]

}


  if (titleValue == "") {
    titleInput.style.border = "red 1px solid";
    errorTitle.style.display="block"
  } else {
    titleInput.style.border = "none";
    errorTitle.style.display="none"
  }
  if (ingredientValue == "") {
    ingredientInput.style.border = "red 1px solid";
    errorIngredient.style.display="block"
  } else {
    ingredientInput.style.border = "none";
    errorIngredient.style.display="none"
  }
  if (stepValue == "") {
    stepInput.style.border = "red 1px solid";
    errorStep.style.display="block";
  } else {
    stepInput.style.border = "none";
    errorStep.style.display="none";
  }

  const recipeAllJs={titre: titleValue ,ingredient:ingredientValue,etapes:stepValue}

  console.log(recipeAllJs)
  parsedStoredRecipe.push(recipeAllJs)

  console.log(parsedStoredRecipe);

  localStorage.setItem("Recipe",JSON.stringify(parsedStoredRecipe))
}

function deleteRecipe() {}

function displayRecipe() {


}

createButton.addEventListener("click", createRecipe);
