const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const TokenAdministration = sequelize.define(
    "token_administration",
    {
        total_tokens: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        used_tokens: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        remaining_tokens: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        last_updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "token_administration",
        timestamps: false,
    }
);

module.exports = TokenAdministration;