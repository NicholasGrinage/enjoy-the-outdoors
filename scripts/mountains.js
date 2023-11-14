"use strict";


  //get html elements into variables
  const mountainsList = document.querySelector("#moutainsList");
  const displayInfoButton = document.querySelector("#displayInfoButton");
  const displayParagraph = document.querySelector("#displayParagraph");
  const mountainImage = document.querySelector("#moutainImage");

  //write functions
  function loadMountainsList() {
    for (const mountain of mountainsArray) {
      let option = new Option(mountain.name, mountain.elevation);
      mountainsList.appendChild(option);
    }
  }

  function onMountainSelectionChanged() {
    if (mountainsList.value == "") {
      displayParagraph.innerText = "";
      mountainImage.src = "";
    }
  }

  function getMountainByElevation(elevation) {
    for (const mountain of mountainsArray) {
      if (mountain.elevation == elevation) {
        return mountain;
      }
    }
  }

  function displayInfo() {
    displayParagraph.innerText = "";
    let selectedMountain = getMountainByElevation(mountainsList.value);
    console.log(selectedMountain); // Debug: Check the selected team object

    displayParagraph.innerText = `You selected the ${selectedMountain.name} (${selectedMountain.elevation}) who play in ${selectedMountain.effort}`;
    mountainImage.src = selectedMountain.img;
    return false;
  }

  loadMountainsList();

  if (displayInfoButton) {
    displayInfoButton.onclick = displayInfo;
  }

  mountainsList.onchange = onMountainSelectionChanged;


window.onload = function () {
    
}
