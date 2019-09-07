/* eslint-disable no-console */
import figlet from 'figlet';
import chalk from 'chalk';

async function showText(text) {
  figlet('Meet App', (err, data) => {
    if (err) {
      console.log('Ops, something went wrong...');
      return;
    }
    console.log(chalk.blue(data));
    console.log('\n');
    console.log(chalk.blue(text));
  });
}

export default showText;
