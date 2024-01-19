class userBase {
    constructor(names) {
        this.users = names;
    }
    count() {
        return this.users.length;    
    }
    getNames() {
        return  this.users.map( (user) => user.getName());     
    }
    getintroductions() {
        return this.users.map( (user) => user.getintroduction());    
    }
}

module.exports = userBase;

// const userBase = require('./userBase');
// const User = require('./users');