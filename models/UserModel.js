const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../users.json");

module.exports = class User {
  constructor(n, e, p) {
    this.name = n;
    this.email = e;
    this.password = p;
  }
  saveUser() {
    fs.readFile(usersPath, (err, info) => {
      let Users = [];
      if (!err) {
        Users = JSON.parse(info)
        Users.push(this);
        fs.writeFile(usersPath,JSON.stringify(Users),(err)=>{
            console.log("Error at saving new user")
        })
      }
    });
  }
};
