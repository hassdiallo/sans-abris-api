const mongoose = require('mongoose');

// Définition du schéma de la ressource
const sdfSchema = new mongoose.Schema(
  {
  email: {
    type: String,
    require
  },
  password: {
    type: String,
    require
  },
  confirm_pwd: {
    type: String,
    require
  },
  nom: {
    type: String,
    require
  },
  prenom: {
    type: String,
    require
  },
  age: {
    type: String,
    require
  },
  status: {
    type: String,
    require
  },
  
},
{
  timestamps:true   
});

module.exports = mongoose.model('Sdf', sdfSchema)