// define hide function which takes in a string as an argument
function hide(location) {
  const hideLocation = location; // create variable to store value of location

  function seek() {
    return hideLocation; // form closure around hideLocation
  }

  return seek; // return seek function
}

const startGame = hide("under bed");
console.log(startGame()); 
console.log(hideLocation);

// The reason you cannot log hideLocation directly is because hideLocation is scoped to the function hide() and not inside the global scope. 
// Because I used a const variable, it is block scoped.
