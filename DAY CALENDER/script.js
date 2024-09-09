

const form = document.getElementById("formStyling");
const dateInput = document.getElementById("date");
const submitButton = document.getElementById("submit");
const dayConfirmationDiv = document.getElementById("dayConfirmation");
const yourDay = document.getElementById("yourDay");

yourDay.style.color = "red";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedDate = new Date(dateInput.value);
  const dayOfWeek = selectedDate.getDay();
  const currentMonth = selectedDate.getMonth();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  yourDay.textContent = dayNames[dayOfWeek];

  // Define an array of background images for each month
  var backgroundImages = [
    "january_background.jpg", // January
    "february_background.jpg", // February
    "march_background.jpg", // March
    "april_background.jpg", // April
    "may_background.jpg", // May
    "june_background.jpg", // June
    "july_background.jpg", // July
    "img3.jpg", // August
    "big.jpg", // September
    "img2.jpg", // October
    "november_background.jpg", // November
    "december_background.jpg" // December
  ];

  // Change bcg img on month
  document.body.style.backgroundImage = "url('" + backgroundImages[currentMonth] + "')";

  //full screen and center the img
  // document.body.style.backgroundSize = "cover";
  // document.body.style.backgroundPosition = "center";
});