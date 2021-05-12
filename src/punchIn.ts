import Nightmare from 'nightmare';

const nightmare = new Nightmare({ show: false });

const url = 'https://teamspirit.ap0.visual.force.com/apex/AtkWorkComponent';
const username = process.env.TEAMSPIRIT_USERNAME;
const password = process.env.TEAMSPIRIT_PASSWORD;

(async () => {
  await nightmare
    .goto(url)
    .wait(0)
    .insert('#username', '')
    .insert('#password', '')
    .insert('#username', username)
    .insert('#password', password)
    .uncheck('#rememberUn')
    .click('#Login')
    .wait('#btnStInput.pw_btnnst')
    .click('#btnStInput')
    .end();
})();
