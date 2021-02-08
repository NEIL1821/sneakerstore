const { userMethods } = require('../database/userDB');
class user {
  constructor() {
    this.db = new userMethods();
  }
  getById = (id) => {
    return this.db.get(id);
  };
  getByEmail = (email) => {
    return this.db.getByEmail(email);
  };
  add = (user) => {
    return this.db.add(user);
  };
  updateProfile = (id, updatedInfo) => {
    return this.db.updateProfile(id, updatedInfo);
  };
  addToSelling = (id , sneakerObj) => { // add to sellingSneakers Array
    return this.db.addToSelling(id , sneakerObj);
  }
  boughtSneaker = (id, sneakerObj) => {
    return this.db.boughtSneaker(id, sneakerObj);
  }
  likeSneaker = (id, sneakerObj) => {
    return this.db.likeSneaker(id, sneakerObj);
  }
}

module.exports = new user();
