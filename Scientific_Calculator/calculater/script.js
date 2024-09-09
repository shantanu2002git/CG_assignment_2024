// Get the screen element
var screen = document.getElementById("screen");

// Add event listeners for other buttons
document.getElementById("ce").addEventListener("click", backspc);
document.getElementById("ac").addEventListener("click", () => {
  screen.value = "";
});

document.querySelector("#fct").addEventListener("click", facto);
document.querySelector(".sin").addEventListener("click", sin);
document.querySelector(".cos").addEventListener("click", cos);
document.querySelector(".tan").addEventListener("click", tan);
document.querySelector(".pow").addEventListener("click", pow);
document.querySelector(".sqroot").addEventListener("click", sqrt);
document.querySelector(".log").addEventListener("click", log);
document.querySelector(".pi").addEventListener("click", pi);
document.querySelector(".tan-1").addEventListener("click", () => {
  screen.value = 1 / screen.value;
});

// Function to handle backspace
function backspc() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

// Function to handle sin
function sin() {
  screen.value = Math.sin(screen.value);
}

// Function to handle cos
function cos() {
  screen.value = Math.cos(screen.value);
}

// Function to handle tan
function tan() {
  screen.value = Math.tan(screen.value);
}

// Function to handle power
function pow() {
  // screen.value = Math.pow(screen.value, 2);
  let vl = screen.value;
  screen.value = vl * vl;
}

// Function to handle square root
function sqrt() {
  screen.value = Math.sqrt(screen.value);
}

// Function to handle log
function log() {
  screen.value = Math.log(screen.value);
}

// Function to handle pi
function pi() {
  screen.value = Math.PI;
}

function facto() {
  /*
  let res = 1;
  let n = parseInt(screen.value); // convert input to integer
  if (n >= 0) { // check if input is a non-negative integer
    for (let i = 1; i <= n; i++) {
      res = res * i;
    }
    console.log(res);
    screen.value = res.toString(); // convert result to string
  } else {
    console.log("Error: Input must be a non-negative integer.");
  }
    */

screen.value="--------------------------------------";
}
// Add event listeners for number buttons
var btn = document.querySelectorAll(".btn");

for (item of btn) {
  if (item.innerText == "=") {
    item.addEventListener("click", () => {
      try {
        screen.value = eval(screen.value);
      } catch (e) {
        screen.value = "Error";
      }
    });
  } else {
    item.addEventListener("click", (e) => {
      var btntext = e.target.innerText;

      // if (btntext == "×") {
      //   btntext = "*";
      // }

      if (btntext == "÷") {
        btntext = "/";
      }

      screen.value += btntext;
    });
  }
}
