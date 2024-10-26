function superheroesTemplate(hero, powers) {
  const { heroid, id, name, secretIdentity, age, portrait, rentalPoints } =
    hero;
  const heroPowers = powers.filter((power) => power.heroId === id);

  const profilePicture = `/assets/superheroes/${portrait}`;


  let card = document.createElement("div");
  card.classList.add("card");



  let profileImage = document.createElement("img");
  profileImage.classList.add("hero-photo");
  profileImage.src = profilePicture;

  let heroName = document.createElement("h1");
  heroName.classList.add("hero-name");
  heroName.textContent = `${name}`;

  let secretName=document.createElement('p');
  secretName.textContent=`${secretIdentity}`
  secretName.classList.add('secret-identity')
  let heroAge = document.createElement("p");
  heroAge.classList.add("age");
  heroAge.textContent = `Age : ${age}`;
  let heroCredit = document.createElement("p");
  heroCredit.classList.add("credit");
  heroAge.textContent = `Rental point : ${rentalPoints} points`;


  card.appendChild(profileImage);
  card.appendChild(heroName);
  card.appendChild(heroAge);
  card.appendChild(heroCredit);
  card.appendChild(secretName)
  heroPowers.forEach((power) => {
    let heroSuperPower = document.createElement("p");
    heroSuperPower.classList.add("superpower");

    heroSuperPower.textContent = `Superpower:${power.power}`;
    heroSuperPower.classList.add("superpower");

    let imgSuperPower = document.createElement("img");
    imgSuperPower.src = `/assets/powers/${power.image}`;
    imgSuperPower.classList.add("icon");

    card.appendChild(heroSuperPower);
    card.appendChild(imgSuperPower);
  });
  return card;
}

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
