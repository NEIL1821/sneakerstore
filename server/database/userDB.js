const { ObjectId } = require('mongodb');
const User = require('../models/user');

class userMethods {
  async get(id) {
    try {
      const user = await User.findOne({ _id: ObjectId(id) });
      return user;
    } catch (e) {
      return { error: "ID doesn't exist" };
    }
  }

  async getByEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
  }

  async add(user) {
    const userDB = await User.create({ ...user });
    return userDB;
  }

  async updateProfile(id, updatedInfo) {
    const updatedUserDB = await User.findByIdAndUpdate(
      { _id: id },
      { ...updatedInfo },
      {
        new: true,
        omitUndefined: true,
        useFindAndModify: false,
        runValidators: true,
      }
    );
    console.log(updatedUserDB);
    return updatedUserDB;
  }

  async addToSelling(id , sneakerObj) { 
    const updatedUserDB = await User.updateOne(
      { _id: id }, 
      { $push: { sellingSneakers : sneakerObj} }
    )
    return updatedUserDB
  }

  async boughtSneaker (id, sneakerObj) {
    const updatedUserDB = await User.updateOne(
      { _id: id}, 
      { $push: { purchasedSneakers : sneakerObj}}
    )
    this.soldSneaker(sneakerObj.ownerID);
    return updatedUserDB
  }

  async soldSneaker (ownerId) {
    const updatedSoldDB = await User.updateOne(
      { _id: ownerId}, 
      { $push: { soldSneakers : sneakerObj}}
    )
    return updatedSoldDB;
  }

  async likeSneaker (Id, sneakerObj) {
    const updatedSoldDB = await User.updateOne(
      { _id: Id}, 
      { $push: { savedSneakers : sneakerObj}}
    )
    return updatedSoldDB;
  }


}

module.exports = { userMethods };
