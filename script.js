/* Declare variables below to save the different sections (divs) of your story*/
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOnescreen = document.querySelector(".option-one-screen");
let optionTwoscreen = document.querySelector(".option-two-screen");
let optionOneend = document.querySelector(".option-one-end");
let optionTwoend = document.querySelector(".option-two-end");
let storyOpening = document.querySelector(".story-opening");
let continueGoing = document.querySelector(".continue-going");
let continueWalking = document.querySelector(".continue-walking");
let Title = document.querySelector(".title");
let changeOutcome = document.querySelector(".change-outcome");
let changeOutcomeagain = document.querySelector(".change-outcome-again")

// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
optionOne.onclick=function(){
storyOpening.style.display = "none";
Title.style.display = "none";
optionOne.style.display = "none";
optionTwo.style.display = "none";
optionOnescreen.style.display = "block";
};

continueGoing.onclick=function(){
optionOnescreen.style.display = "none";
optionOneend.style.display = "block";
};


optionTwo.onclick=function(){
storyOpening.style.display = "none";
Title.style.display = "none";
optionOne.style.display = "none";
optionTwo.style.display = "none";
optionTwoscreen.style.display = "block";
};

continueWalking.onclick=function(){
optionTwoscreen.style.display = "none";
optionTwoend.style.display = "block";
};

changeOutcome.onclick=function(){
  optionOneend.innerHTML = "LOL YA TROLLED BRO LOLOLOL. ok but actually restart the game do what the other button says. and if ur here after u pushed the other button first ur an average ohio citizen which means anya solos u and any other character u know";
}




changeOutcomeagain.onmouseover=function(){
  changeOutcomeagain.innerHTML = "LMAO GET TROLLED AGAIN BOZO";
}

