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
    .wait('#btnStInput.pw_btnnst')
    .click('#btnStInput')
    .wait('#busyWaitMessage')
    .wait('#btnStInput.pw_btnnst_dis')
    .end();
})().catch((e) => {
  console.error(e); // eslint-disable-line no-console
});
