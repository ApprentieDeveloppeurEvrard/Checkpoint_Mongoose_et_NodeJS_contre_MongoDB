const Person = require('../models/person');

// Créer une personne
exports.createPerson = async (req, res) => {
  try {
    const person = new Person(req.body);
    const savedPerson = await person.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer toutes les personnes
exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer une personne par son ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Personne non trouvée' });
    }
    res.json(person);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour une personne
exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une personne
exports.deletePerson = async (req, res) => {
  try {
    await Person.findByIdAndRemove(req.params.id);
    res.json({ message: 'Personne supprimée' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
