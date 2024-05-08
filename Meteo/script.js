
// Fonction pour récupérer des données depuis le fichier JSON
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }

    const data= await response.json();
    console.log(data)
    return data.location;
  } catch (error) {
    console.error("Erreur lors du chargement du JSON", error);
    return null;
  }
}

async function displayData(data){
let countryMeteo=document.querySelector(".localisation");
let imageMeteo=document.createElement("img")

let meteoData=await fetchData(url);
if (meteoData){
countryMeteo.textContent=`${meteoData.country},${meteoData.region},${meteoData.localtime}`
}







}

displayData()