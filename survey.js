const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profilePar = '';

rl.question('What\'s your name? Nichnames are also acceptable :) ', (answer) => {
  profilePar += (`${answer}. `);
  rl.question('What\'s an activity you like doing: ', (answer) => {
    profilePar += (`${answer}. `);
    rl.question('What do you listen to while doing that? ', (answer) => {
      profilePar += (`${answer}. `);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profilePar += (`${answer}. `);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profilePar += (`${answer}. `);
          rl.question('Which spoort is your absolute favourite? ', (answer) => {
            profilePar += (`${answer}. `);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profilePar += (`${answer}. `);
              console.log(`Herre is your profile discription: \n ${profilePar}`);
              rl.close();
            });
          });
        });  
      });
    });
  });
});