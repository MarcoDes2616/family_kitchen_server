const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Family = sequelize.define(
  "families",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unique_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Family;
