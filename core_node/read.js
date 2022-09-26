// const firstName = process.argv[2];
// const lastName = process.argv[3];


// console.log(firstName + " " + lastName);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("How are you doing today ?", ans => {
    console.log(ans);
    rl.close();
  })
});

console.log("I am done ");