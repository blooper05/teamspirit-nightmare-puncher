import { nightmare, url, username, password } from './index.js';

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
    .wait('#btnStInput:enabled')
    .click('#btnStInput')
    .wait('#busyWaitMessage')
    .wait('#btnStInput:disabled')
    .end();
})().catch((e) => {
  console.error(e); // eslint-disable-line no-console
});
