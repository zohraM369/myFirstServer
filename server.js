// Import des librairies
const express = require("express");
const _ = require("lodash");
const bodyParser = require("body-parser");
const config = require("./config");

// Création de notre application express.js
const app = express();

// Déclaration des controllers pour utilisateurs
const UserController = require("./controllers/UserController");

/* ------------------ Création des routes ------------------ */

// Création du endpoint pour ajouter un utilisateur
app.post("/user", UserController.addOneUser);
// Création du endpoint pour ajouter plusieurs utilisateurs
app.post("/users", UserController.addManyUsers);
// Création du endpoint pour la récupération d'un utilisateur
app.get("/user", UserController.findOneUser);
// Création du endpoint pour la récupération de plusieurs utilisateurs
app.get("/users", UserController.findManyUsers);
// Création du endpoint pour la modification d'un utilisateur
app.put("/user", UserController.updateOneUser);
// Création du endpoint pour la modification de plusieurs utilisateurs
app.put("/users", UserController.updateManyUsers);
// Création du endpoint pour la suppression d'un utilisateur
app.delete("/user", UserController.deleteOneUser);
// Création du endpoint pour la suppression de plusieurs utilisateurs
app.delete("/users", UserController.deleteManyUsers);

// Démarrage de notre serveur, le port choisi
app.listen(config.port, () => {
  console.log(
    `(INFO) ${new Date().toLocaleTimeString()} : Le serveur est démarré`
  );
});
