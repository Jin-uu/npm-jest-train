function sendUser(name, callback) {
    setTimeout(() => {
        console.log("sending User...");
        const user = {
            name : name,
            email : name+"@email.com"
        };
        callback(user);
    }, 100)
}

sendUser("Jinu", console.log)

module.exports = sendUser;