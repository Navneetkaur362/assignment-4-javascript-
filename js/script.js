var textbox = document.querySelector("#sport");
var button1 = document.querySelector(".studentId");
var button2 = document.querySelector(".studentName");
var button = document.querySelector("#button");
var data = document.querySelector("#data");
var date = document.querySelector("#date");
var newLine = document.createElement("br");
var para1 = document.querySelector(".p1");
var para2 = document.querySelector(".p2");
button.addEventListener("click", function (event) {
  fetchData(event);
});

button1.addEventListener("click", function () {
  para1.textContent = "200544640";
});

button2.addEventListener("click", function () {
  para2.textContent = "Navneet kaur";
});

async function fetchData(event) {
  event.preventDefault();

  let searchString = encodeURIComponent(textbox.value.trim());
  let searchDate = date.value.split("-").join("");
  let url = `https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=${searchString}&Date=${searchDate}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0a47000843mshcca2219e29f236dp1be9ddjsna8ce262ab70f",
      "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    data.textContent = "Match name: ";
    for (let i = 0; i < result.Stages.length; i++) {
      data.textContent += `${i + 1}) ${result.Stages[i].Snm} `;
      data.appendChild(newLine);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(json) {
  // STEP 5: Log to the console the results from the API
  console.log(json);
}

// Call the function
fetchData();
