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


document.addEventListener('DOMContentLoaded', (event) => {
  const konamiCode = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a"
  ];

  let konamiCodePosition = 0;

  document.addEventListener('keydown', (e) => {

      if (e.key === konamiCode[konamiCodePosition]) {
          konamiCodePosition++;


          if (konamiCodePosition === konamiCode.length) {
              revealSecretIdentity();
              konamiCodePosition = 0;
          }
      } else {
          konamiCodePosition = 0;
      }
  });

  function revealSecretIdentity() {
      const secretIdentityElements = document.querySelectorAll('.secret-identity');
      secretIdentityElements.forEach(element => {
          element.style.display = 'block';
          element.classList.add('fade-in');
      });
  }



});
let globalHeroes=[]
let globalPowers=[]

async function getHeroes() {
  const url = "/data/superheroes.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Impossible de charger les données");
    }
    const data = await response.json();
    console.log(data);
    globalHeroes=data.superheroes;
    globalPowers=data.powers
    return { superheroes: data.superheroes, powers: data.powers };
  } catch (error) {
    console.error("Une erreur est survenue lors du chargement du JSON", error);
    return { superheroes: [], powers: [] };
  }
}


async function displayHeroes(superheroes = globalHeroes, powers = globalPowers) {
  const container = document.getElementById('heroes-container'); 
  container.innerHTML=""
  superheroes.forEach(hero => {
    const heroCard = superheroesTemplate(hero, powers);
    container.appendChild(heroCard);
  });

}




function searchHero(){
let searchInput = document.getElementById("search");

searchInput.addEventListener('input',(e)=>{
let searchInputValue=e.target.value;
if (searchInputValue.length>= 2){
  const powerFilter =globalPowers.filter((power)=>power.power.toString().toLowerCase().includes(searchInputValue.toLowerCase()));
  const filteredHeroes = globalHeroes.filter(hero => 
    powerFilter.some(power => power.heroId === hero.id)
  );

  displayHeroes(filteredHeroes)
}
else{
  displayHeroes() 
}
})



} 

document.addEventListener('DOMContentLoaded', async (event) => {
  await getHeroes();
  displayHeroes();
  searchHero();
});