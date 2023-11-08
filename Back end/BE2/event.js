const EventEmitter = require('node:events');
const customEmitter = new EventEmitter();

function login(user) {
    const delay = Math.random() *(2-0.1)+0.1;
    setTimeout(() => {
        customEmitter.emit('userloggedin',user);
    }, delay * 1000);
    logout(user);
}

function logout(user) {
    const delay = Math.random() *(2-0.1)+0.1;
    setTimeout(() => {
        customEmitter.emit('userloggedout',user);
    }, delay * 1000);
}

customEmitter.on('userloggedin',user => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: ${user} loggedin`);
})

customEmitter.on('userloggedout',user => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: ${user} loggedout`);
})

setInterval(() => {
    const usernumber = Math.floor(Math.random() *10)+1;
    username = `user_${usernumber}`;
    login(username);
}, 500);