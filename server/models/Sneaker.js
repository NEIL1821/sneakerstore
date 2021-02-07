const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema(
  {
    id:'',
    brand: '',
    colorway: '',
    gender: '',
    name: '',
    releaseDate: '',
    retailPrice: {
      type: Number
    },
    shoe: '',
    styleId: '',
    title: '',
    year: {
      type: Number
    },
    media: {
      imageUrl: '',
      smallImageUrl: '',
      thumbUrl: ''
    },
    condition: '',
    extraInfo: '',
    userID: '', // owner id 
    views: '',
    available: {
      type: Boolean
    }, 
    sellerName:''
  },
  {
    timestamps: true,
    collection: 'sneakers',
  }
);
const sneaker = (module.exports = mongoose.model('Sneaker', sneakerSchema));
module.exports = sneaker;

