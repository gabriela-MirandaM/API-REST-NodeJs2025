'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RefreshTokens.belongsTo(models.Usuario,{
        foreignKey: "usuario_id",
        onDelete:"NO ACTION",
        onUpdate:"NO ACTION",
      });
    }
  }
  RefreshTokens.init({
    id:{
      field:"id",
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usuario_id: {
      field:"usuario_id",
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:"usuarios",
        key:"id",
      }
    },
    refresh_token: {
      type:DataTypes.STRING
    },
    issued_time: {
      type:DataTypes.STRING
    },
    expiration_time:{
      type: DataTypes.STRING
    },
    createdAt:{
      field:"created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt:{
      field:"updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
     deletedAt:{
      field:"deleted_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    sequelize,
    modelName: 'RefreshToken',
  });
  return RefreshTokens;
};