'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyFavAgent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyFavAgent.init({
    displayName: DataTypes.STRING,
    role: DataTypes.STRING,
    displayIcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MyFavAgent',
  });
  return MyFavAgent;
};