"use strict";

const mountainData = document.querySelector("#mountainData");
const displayMountainOutput = document.querySelector("#displayMountainOutput");
const mountainImage = document.querySelector("#mountainImage");

function listMountains() {
  for (const mountain of mountainsArray) {
    let option = new Option(mountain.name, mountain.elevation);
    mountainData.appendChild(option);
  }
}

function displayMountainOnClick() {
  displayMountainOutput.innerText = "";
  mountainImage.innerHTML = "";
  for (const mountain of mountainsArray) {
    if (mountainData.value == mountain.elevation) {
      displayMountainOutput.innerText = `You selected the ${mountain.name} with an elevation of (${mountainData.value}). The effort it takes to climb this mountain is ${mountain.effort}. 
        ${mountain.desc}`;
      let addImage = document.createElement("img");
      addImage.src = `images/${mountain.img}`;
      addImage.alt = "Mountain Picture";
      mountainImage.appendChild(addImage);
    }
  }
  if (mountainData.value == "select") {
    alert("No mountain was selected");
    return mountainData.value;
  }
}

listMountains();
