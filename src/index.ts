import Nightmare from 'nightmare';

const nightmare = new Nightmare({ show: false });

const url = 'https://teamspirit.ap0.visual.force.com/apex/AtkWorkComponent';
const username = process.env.TEAMSPIRIT_USERNAME;
const password = process.env.TEAMSPIRIT_PASSWORD;

export { nightmare, url, username, password };
