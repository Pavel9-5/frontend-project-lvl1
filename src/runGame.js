import readlineSync from 'readline-sync';
import getname from './cli.js';

function getRandom(max) {
  const num = Math.floor(Math.random() * max);
  const even = num % 2 === 0 ? 'yes' : 'no';
  return [num, even];
}

export default function runGame() {
  const name = getname();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const question = getRandom(100);
    console.log(`Question: ${question[0]}`);
    const yesOrNo = readlineSync.question('Your answer: ');
    if (yesOrNo === question[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      if (yesOrNo === 'no' || yesOrNo === 'yes') {
        console.log(`'${question[1] === 'yes' ? 'no' : 'yes'}' is wrong answer ;(. Correct answer was '${question[1]}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log(`'${yesOrNo}' is wrong answer ;(. Correct answer was '${question[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
