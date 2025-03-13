const mongoose = require('mongoose');

// Définir le schéma pour une personne
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Le nom est obligatoire
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
    default: []  // Tableau de chaînes, avec une valeur par défaut vide
  },
});

// Créer un modèle basé sur le schéma
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
