import { nightmare, url, username, password } from './index';

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
    .wait('#btnEtInput:enabled')
    .click('#btnEtInput')
    .wait('#busyWaitMessage')
    .wait('#btnEtInput:disabled')
    .end();
})().catch((e) => {
  console.error(e); // eslint-disable-line no-console
});
