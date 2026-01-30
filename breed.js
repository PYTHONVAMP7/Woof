
const breed_grid = document.querySelector(".breed-grid");

const breed_cards = breed_grid.children;

const extraBreedData = {
  goldenretriver: {
    name: "Golden Retriever",
    lifespan: "10–12 years",
    size: "Large",
    goodFor: "Families, first-time owners, therapy work",
    exercise: "High",
    grooming: "High",
    training: "Easy",
    hairfall: "High",
    description:
      "Golden Retrievers are friendly, intelligent, and devoted dogs. They thrive on human interaction and are excellent family companions."
  },

  husky: {
    name: "Husky",
    lifespan: "12–15 years",
    size: "Medium to Large",
    goodFor: "Active owners, cold climates",
    exercise: "Very High",
    grooming: "High",
    training: "Moderate",
    hairfall: "Very High",
    description:
      "Huskies are energetic working dogs with a playful personality. They require daily exercise and strong leadership."
  },

  rottweiler: {
    name: "Rottweiler",
    lifespan: "8–10 years",
    size: "Large",
    goodFor: "Experienced owners, protection",
    exercise: "Moderate",
    grooming: "Low",
    training: "Moderate",
    hairfall: "Moderate",
    description:
      "Rottweilers are powerful, loyal, and protective dogs. With proper training, they become calm and confident companions."
  },

  beagle: {
    name: "Beagle",
    lifespan: "12–15 years",
    size: "Medium",
    goodFor: "Families, apartment living",
    exercise: "High",
    grooming: "Low",
    training: "Moderate",
    hairfall: "Moderate",
    description:
      "Beagles are curious scent hounds with a cheerful nature. They love exploration and social interaction."
  },

  chihuahua: {
    name: "Chihuahua",
    lifespan: "14–18 years",
    size: "Small",
    goodFor: "Apartments, single owners",
    exercise: "Low",
    grooming: "Low",
    training: "Moderate",
    hairfall: "Low",
    description:
      "Chihuahuas are alert, loyal, and confident despite their small size. They form strong bonds with their owners."
  },

  bulldog: {
    name: "Bulldog",
    lifespan: "8–10 years",
    size: "Medium",
    goodFor: "Families, relaxed owners",
    exercise: "Low",
    grooming: "Low",
    training: "Moderate",
    hairfall: "Moderate",
    description:
      "Bulldogs are calm and affectionate dogs. They prefer a relaxed lifestyle and require minimal exercise."
  },

  schnauzer: {
    name: "Schnauzer",
    lifespan: "12–15 years",
    size: "Medium",
    goodFor: "Families, watchdog roles",
    exercise: "Moderate",
    grooming: "High",
    training: "Easy",
    hairfall: "Low",
    description:
      "Schnauzers are intelligent and alert dogs known for their distinctive beard and strong personality."
  },

  maltese: {
    name: "Maltese",
    lifespan: "12–15 years",
    size: "Small",
    goodFor: "Apartments, companionship",
    exercise: "Low",
    grooming: "Very High",
    training: "Easy",
    hairfall: "Very Low",
    description:
      "Maltese dogs are gentle and affectionate lap dogs with long silky coats and a playful spirit."
  },

  germanshepherd: {
    name: "German Shepherd",
    lifespan: "9–13 years",
    size: "Large",
    goodFor: "Families, working roles, security",
    exercise: "High",
    grooming: "High",
    training: "Easy",
    hairfall: "Very High",
    description:
      "German Shepherds are intelligent, courageous, and versatile dogs commonly used in police and service roles."
  },

  pomeranian: {
    name: "Pomeranian",
    lifespan: "12–16 years",
    size: "Small",
    goodFor: "Apartments, companionship",
    exercise: "Moderate",
    grooming: "High",
    training: "Moderate",
    hairfall: "High",
    description:
      "Pomeranians are fluffy, energetic dogs with bold personalities. They are alert and love attention."
  }
};


for(let card of breed_cards){
    card.style.animationDelay = (Array.from(breed_cards).indexOf(card) * 0.2) + "s";
    let breedData = document.createElement("div")
    card.append(breedData)
    breedData.classList.add("breed-data");
    breedData.style.display = "none";
    let size = document.createElement("p");
    size.innerHTML = "<strong>Size:</strong> " + extraBreedData[card.id].size
    breedData.append(size);
    let lifespan = document.createElement("p");
    lifespan.innerHTML = "<strong>Lifespan:</strong> " + extraBreedData[card.id].lifespan;
    breedData.append(lifespan);
    let goodFor = document.createElement("p");
    goodFor.innerHTML = "<strong>Good For:</strong> " + extraBreedData[card.id].goodFor;
    breedData.append(goodFor);
    let exercise = document.createElement("p");
    exercise.innerHTML = "<strong>Exercise:</strong> " + extraBreedData[card.id].exercise;
    breedData.append(exercise);
    let grooming = document.createElement("p");
    grooming.innerHTML = "<strong>Grooming:</strong> " + extraBreedData[card.id].grooming;
    breedData.append(grooming);
    let training = document.createElement("p");
    training.innerHTML = "<strong>Training:</strong> " + extraBreedData[card.id].training;
    breedData.append(training);
    let hairfall = document.createElement("p");
    hairfall.innerHTML = "<strong>Hairfall:</strong> " + extraBreedData[card.id].hairfall;
    breedData.append(hairfall);
    let description = document.createElement("p");
    description.innerHTML = "<strong>Description:</strong> " + extraBreedData[card.id].description;
    breedData.append(description);

    card.addEventListener("click", function(e){
        e.stopPropagation();
        breedData.style.display = breedData.style.display === "none" ? "flex" : "none";
        card.classList.toggle("expanded");
    });
}


setTimeout(function(){
    for(let card of breed_cards){
        card.style.animation = "none";
    }
}, 2600);


