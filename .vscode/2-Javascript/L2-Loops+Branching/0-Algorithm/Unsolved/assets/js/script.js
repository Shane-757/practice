alert('Welcome to the Algorithm! ');
const userInput = prompt(
  'Type in a number and I will return the negative counterpart'
);

alert(`${userInput} in the negative number is  -${userInput} `);
alert(`${-Math.abs(parseInt(userInput))}`);
