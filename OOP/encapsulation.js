class User {
    #username;
    #password;
    #email;
    constructor(username,password,email) {
       this.#username=username;
       this.#password=password;
       this.#email=email;
    }
    getUsername() {
        return this.#username;
    }
    setUsername(newUsername) {
      this.#username=newUsername;
    }
    getPassword() {
        return this.#password;
    }
    setPassword(newPassword) {
        if (newPassword.length>=8) {
            this.#password=newPassword;
            console.log("Password updated successfully:)");
        } else {
            console.log("Password must be at least 8 characters");
        }
    }
    getEmail() {
        return this.#email;
    }
    setEmail(newEmail) {
         this.#email=newEmail;
    }
}
let user1=new User("Kakarot","milo1234","mkaazim13@gmail.com");
console.log( user1.getUsername(),"\n",user1.getPassword(),"\n",user1.getEmail());
user1.setPassword("goku@1234");
