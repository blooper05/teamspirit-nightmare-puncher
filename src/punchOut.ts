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
    .wait('#btnEtInput.pw_btnnet')
    .click('#btnEtInput')
    .wait('#busyWaitMessage')
    .wait('#btnEtInput.pw_btnnet_dis')
    .end();
})().catch(() => {});
