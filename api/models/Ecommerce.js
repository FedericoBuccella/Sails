/**
 * Ecommerce.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type:"String", required: true},
    price: { type: "Number", required: true},
    description: { type:"String", required: true},
    stock: { type:"Number", required: true},
    category: { type:"String", required: true}

  },

};

