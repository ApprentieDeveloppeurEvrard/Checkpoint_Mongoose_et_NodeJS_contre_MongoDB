// Importer les dépendances
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personRoutes = require('./routes/personRoutes');

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();

// Middleware pour analyser le corps des requêtes (JSON)
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connexion à MongoDB réussie');
})
.catch((error) => {
  console.error('Erreur de connexion à MongoDB :', error);
});

// Utiliser les routes de personnes
app.use('/api/people', personRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
