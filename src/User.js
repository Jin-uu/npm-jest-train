class User{
    constructor(name, age) {
        if(age < 20) {
            throw new Error("[ERROR] : 20세 이상만 가능합니다.");
        }
        this.name = name;
        this.email = name+"@email.com";
    }
    // ...
}

module.exports = User;