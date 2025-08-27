const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    login_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    token_expires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pushToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.last_login;
  delete values.login_token;
  delete values.token_expires;
  return values;
};

User.beforeSave(async (user) => {
  const { login_token } = user.dataValues;

  const hashedPassword = await bcrypt.hash(login_token, 10);
  user.dataValues.login_token = hashedPassword;
});

module.exports = User;
