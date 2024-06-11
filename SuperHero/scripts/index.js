/* <div class="card">
<img src="./assets/superheroes/aquaman.jpg" width="250px" class="hero-photo">
<p class="hero-name">Name : Aquaman</p>
<p class="age">Age : 35</p>
<p class="superpower">
    <img src="./assets/powers/underwater_breathing.jpg" alt="Underwater breathing icon" class="icon"> 
    First superpower : Underwater breathing
</p>
<p class="superpower">
    <img src="./assets/powers/super_strength.jpg" alt="Super strength icon" class="icon"> 
    Second superpower : Super strength
</p>
<p class="superpower">
    <img src="./assets/powers/communication_sea_life.jpg" alt="Communication with sea life icon" class="icon"> 
    Third superpower : Communication with sea life
</p>
</div> */


async function getHeroes() {
  const url = "/data/superheroes.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }
    const data = await response.json();
    console.log(data);
    return { superheroes: data.superheroes, powers: data.powers };
  } catch (error) {
    console.error("Une erreur est survenue lors du chargement du JSON", error);
    return { superheroes: [], powers: [] };
  }
}


async function displayHeroes() {
  const { superheroes, powers } = await getHeroes();
  const container = document.getElementById('heroes-container'); 

  superheroes.forEach(hero => {
    const heroCard = superheroesTemplate(hero, powers);
    container.appendChild(heroCard);
  });
}


displayHeroes();

  