class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.email = name+"@email.com";
    }

    getEmail() {
        return this.email;
    }
}

module.exports = User;