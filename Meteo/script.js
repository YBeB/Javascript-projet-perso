
let url="http://api.weatherapi.com/v1/current.json?key=69ff637606ec4868b0a123953240805&q=Paris"
// Fonction pour récupérer des données depuis le fichier JSON
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Impossible de charger les données");
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement du JSON", error);
      return null;
    }
  
  }
