"use strict"

const statesList = document.querySelector("#statesList");
const parkTableBody = document.querySelector("#parkTableBody");
//  write functions
function loadStatesList() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location.name;
    option.textContent = location.name;
    statesList.appendChild(option);
  }
}

function loadDefaultOption() {
    let option = document.createElement("option");
    option.textContent = "Select...";
    option.value = "";
    activityList.appendChild(option);
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

function loadParkRowByStates(category) {
    parkTableBody.options.length = 0;
    loadDefaultOption()
    for (const park of nationalParksArray) {
        if (park.category == category) {
            let option = document.createElement
            option.textContent = park.LocationName
            option.value = park.LocationID
            parkTableBody.appendChild(option);
        }
    }
}

function categoryListCHanged() {
    const locationName1 = parkTableBody.value
    loadParkRowByStates
}

// wire up functions
loadStatesList();
window.onload = function () {
  loadParksTable();
};