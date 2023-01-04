// Define the library object
let myLibrary = {};

// Define a function to generate a random number between a given range
myLibrary.randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Define a function to generate a random hex color code
myLibrary.randomColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += myLibrary.randomNumber(0, 15).toString(16);
  }
  return color;
};

// Define a function to check if an element is in the viewport
myLibrary.isInViewport = function (element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Export the library object
module.exports = myLibrary;
