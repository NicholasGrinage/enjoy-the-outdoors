"use strict";

const mountainData = document.getElementById("mountainData");
const displayMountainOutput = document.getElementById("displayMountainOutput");
const mountainImage = document.getElementById("mountainImage");
const imageStorage = document.getElementById("imageStorage");

function listMountains() {
  for (const mountain of mountainsArray) {
    let option = new Option(mountain.name, mountain.elevation);
    mountainData.appendChild(option);
  }
}

function displayMountainOnClick() {
  // remove image on click

  for (const mountain of mountainsArray) {
    if (mountainData.value == mountain.elevation) {
      displayMountainOutput.innerText = `You selected the ${mountain.name} with an elevation of (${mountainData.value}). The effect it takes to climb this mountain is ${mountain.effort}.
       
        ${mountain.desc}`;
      mountainImage.src = mountain.img;
      let addImage = document.createElement("img");
    addImage.src = mountain.img
    imageStorage.appendChild(addImage)
    }
    
  }
  if (mountainData.value == "select") {
    alert("No mountain was selected");
    return mountainData.value;
  }
}

mountainData.onchange = function () {
  if (mountainData.value == "select") {
    mountainImage.src = "";
    displayMountainOutput.innerText = "";
  }
};

listMountains();
