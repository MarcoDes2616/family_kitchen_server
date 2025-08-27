const User = require("./User");
const Family = require("./Family");
const Recipe = require("./Recipe");
const Vote = require("./Vote");
const TokenAdministration = require("./TokenAdministration");

const initModels = () => {
  // Family 1 ---- * Users
  Family.hasMany(User, { foreignKey: "family_id" });
  User.belongsTo(Family, { foreignKey: "family_id" });

  // Family 1 ---- * Recipes
  Family.hasMany(Recipe, { foreignKey: "family_id" });
  Recipe.belongsTo(Family, { foreignKey: "family_id" });

  // Users 1 ---- * Recipes (relación para saber quién la solicitó)
  User.hasMany(Recipe, { foreignKey: "requested_by_user_id" });
  Recipe.belongsTo(User, { foreignKey: "requested_by_user_id" });

  // Recipe * ---- * User (a través del modelo Vote)
  // Esta es la relación de muchos a muchos para el sistema de votación.
  User.belongsToMany(Recipe, { through: "Vote", foreignKey: "user_id" });
  Recipe.belongsToMany(User, { through: "Vote", foreignKey: "recipe_id" });

  // Relación directa entre Vote y los otros modelos para manejar los IDs
  User.hasMany(Vote, { foreignKey: "user_id" });
  Vote.belongsTo(User, { foreignKey: "user_id" });

  Recipe.hasMany(Vote, { foreignKey: "recipe_id" });
  Vote.belongsTo(Recipe, { foreignKey: "recipe_id" });

  // User 1 ---- 1 TokenAdministration
  User.hasOne(TokenAdministration, { foreignKey: "user_id" });
  TokenAdministration.belongsTo(User, { foreignKey: "user_id" });

};

module.exports = initModels;
