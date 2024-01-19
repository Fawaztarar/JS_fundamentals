class User {
    constructor(name) {
    this.name = name;
}
getName()  {
    return this.name;    
}

getintroduction() {
    return `Hi my name is ${this.name} !`;

}
}

const user = new User('Gabriela')
module.exports = User;