"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: {
          msg: "Email must be unique",
        },
        validate: {
          notEmpty: {
            msg: "Please insert Email",
          },
          notNull: {
            msg: "Please insert Email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please insert Password",
          },
          notNull: {
            msg: "Please insert Password",
          },
          len: {
            args: [5],
            msg: "Password must have atleast 5 characters",
          },
        },
      },
      profilePict: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://cdn.iconscout.com/icon/free/png-512/free-profile-icon-download-in-svg-png-gif-file-formats--user-avatar-account-people-ecommerce-pack-e-commerce-shopping-icons-2410531.png?f=webp&w=256",
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          user.password = hash(user.password);
        },
      },
    }
  );
  return User;
};
