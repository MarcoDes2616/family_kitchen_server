const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Vote = sequelize.define(
  "votes",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "votes",
  }
);

module.exports = Vote;
