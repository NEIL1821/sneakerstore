const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: [validator.isEmail, 'Must be a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be minimum 6 characters long'],
    },
    name: {
      type: String,
      required: [true, 'Full name is required'],
      minlength: [3, 'Full name must be at least 3 characters long'],
      maxlength: [40, 'Full name cannot be longer than 20 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      minlength: [6, 'Phone number must be at least 6 characters long'],
      maxlength: [20, 'Phone number cannot be longer than 20 characters'],
      validate: [validator.isMobilePhone, 'Phone number is not valid'],
    },
    profilePicture: {
      type: String,
      default: 'https://i.stack.imgur.com/34AD2.jpg'
    },
    rating: {
      type: String
    },
    totalSales: {
      type: String
    },
    savedSneakers: [],
    purchasedSneakers: [],
    sellingSneakers: [],
    soldSneakers: [],
    reviews: [],
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

const user = (module.exports = mongoose.model('User', userSchema));
module.exports = user;
