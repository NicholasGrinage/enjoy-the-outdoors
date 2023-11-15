"use strict";

const parkDropdown = document.querySelector("#parkDropdown");
const parkTableBody = document.querySelector("#parkTableBody");
const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const byAllRadioFilter = document.querySelector("#byAllRadioFilter");
const parkTypeDropDown = document.querySelector("#parkTypeDropDown");
const parkTableBody1 = document.querySelector("#parkTableBody1");
//  state dropdown
function loadStatesList() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location.name;
    option.value = location.name;
    parkDropdown.appendChild(option);
  }
}

function loadTypeList() {
  let option = document.createElement("option");
  option.textContent = "Select...";
  option.value = "";
  parkDropdown.appendChild(option);
}

function loadParksTable() {
  for (const park of nationalParksArray) {
    buildParkRow(park);
  }
}

function buildParkRow(park) {
  let row = parkTableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationID;
  let cell2 = row.insertCell(1);
  cell2.innerText = park.LocationName;
  let cell3 = row.insertCell(2);
  cell3.innerText = park.Address;
  let cell4 = row.insertCell(3);
  cell4.innerText = park.City;
  let cell5 = row.insertCell(4);
  cell5.innerText = park.State;
  let cell6 = row.insertCell(5);
  cell6.innerText = park.ZipCode;
  let cell7 = row.insertCell(6);
  cell7.innerText = park.Phone;
  let cell8 = row.insertCell(7);
  cell8.innerText = park.Fax;
  let cell9 = row.insertCell(8);
  cell9.innerText = park.Latitude;
  let cell10 = row.insertCell(9);
  cell10.innerText = park.Longitude;
}
function createLocationData() {
  parkTableBody.innerHTML = "";

  const selectedState = parkDropdown.value;
  const selectedType = parkTypesArray.find((type) => selectedState.includes(type));

  for (const park of nationalParksArray) {
    const islandState = selectedState == "Rhode Island" || selectedState == "Virgin Islands";

    if (park.State == selectedState || (park.LocationName.includes(selectedType) && !islandState)) {
      buildParkRow(park);
    }
  }
}
// park type dropdown
function loadTypesList() {
  for (const type of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = type;
    option.value = type;
    parkTypeDropDown.appendChild(option);
  }
}

function loadTypeList1() {
  let option = document.createElement("option");
  option.textContent = "Select...";
  option.value = "";
  parkDropdown.appendChild(option);
}

function loadParksTypesTable() {
  for (const park of nationalParksArray) {
    buildParkRow(park);
  }
}

function buildParkRow1(park) {
  let row = parkTableBody.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationID;
  let cell2 = row.insertCell(1);
  cell2.innerText = park.LocationName;
  let cell3 = row.insertCell(2);
  cell3.innerText = park.Address;
  let cell4 = row.insertCell(3);
  cell4.innerText = park.City;
  let cell5 = row.insertCell(4);
  cell5.innerText = park.State;
  let cell6 = row.insertCell(5);
  cell6.innerText = park.ZipCode;
  let cell7 = row.insertCell(6);
  cell7.innerText = park.Phone;
  let cell8 = row.insertCell(7);
  cell8.innerText = park.Fax;
  let cell9 = row.insertCell(8);
  cell9.innerText = park.Latitude;
  let cell10 = row.insertCell(9);
  cell10.innerText = park.Longitude;
}

function createLocationData1() {
  parkTableBody1.innerHTML = "";

  const selectedParkType = parkTypeDropDown.value;
  const selectedType = parkTypesArray.find((type) => selectedParkType.includes(type));

  for (const park of nationalParksArray) {
    const islandState = selectedParkType == "Rhode Island" || selectedParkType == "Virgin Islands";

    if (park.State == selectedParkType || (park.LocationName.includes(selectedType) && !islandState)) {
      buildParkRow(park);
    }
  }
}
// wire up functions
loadStatesList();
window.onload = function () {
  loadParksTable();
};
parkDropdown.onchange = createLocationData;

loadTypesList();
window.onload = function () {
  loadParksTypesTable();
};
parkTypeDropDown.onchange = createLocationData1;

byTypeRadioFilter.onclick = function () {
  loadTypeList();
};

byLocationRadioFilter.onclick = function () {
  loadLocationInDropdown();
};

byAllRadioFilter.onclick = function () {
  locationSelector.style.display = "none";
  loadAllInDropdown();
};
