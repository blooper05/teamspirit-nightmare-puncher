import Nightmare from 'nightmare';

const nightmare = new Nightmare({ show: false });

const url = 'https://teamspirit.cloudforce.com/';
const username = 'USERNAME';
const password = 'PASSWORD';

nightmare
  .goto(url)
  .wait(0)
  .insert('#username', '')
  .insert('#password', '')
  .insert('#username', username)
  .insert('#password', password)
  .uncheck('#rememberUn')
  .click('#Login')
  .end()
  .then(console.log)
  .catch((error) => console.error(error));
