const { ObjectId } = require('mongodb');
const Sneaker = require('../models/sneaker');

class sneakerMethods {
  async get(id) {
    try {
      const sneaker = await Sneaker.findOne({ id: id });
      return sneaker;
    } catch (e) {
      return { error: "Sneaker doesn't exist" };
    }
  }

  async add(sneaker) {
    try {
      const sneakerDB = await Sneaker.create({ ...sneaker });
      return sneakerDB;
    } catch (e) {
      return { error: 'Something went wrong: ' + e };
    }
  }

  async getAll() {
    try {
      const response = await Sneaker.find();
      return response;
    } catch (e) {
      return { error: 'Something went wrong: ' + e };
    }
  }

  async delete(sneakerObj) {
    try {
        const sneaker = await Sneaker.deleteOne({ id: sneakerObj.id });
        return sneaker;
      } catch (e) {
        return { error: "Sneaker could not be deleted" };
    }
  }
}

module.exports = { sneakerMethods };
