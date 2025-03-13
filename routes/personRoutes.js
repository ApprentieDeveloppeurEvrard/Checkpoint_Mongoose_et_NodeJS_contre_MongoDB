const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Route pour créer une personne
router.post('/create', personController.createPerson);

// Route pour obtenir toutes les personnes
router.get('/', personController.getAllPeople);

// Route pour obtenir une personne par son ID
router.get('/:id', personController.getPersonById);

// Route pour mettre à jour une personne
router.put('/:id', personController.updatePerson);

// Route pour supprimer une personne
router.delete('/:id', personController.deletePerson);

module.exports = router;
