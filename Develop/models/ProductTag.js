const { Model, DataTypes } = require("sequelize");
const {
  product,
} = require("../../../UofA-VIRT-FSF-PT-12-2022-U-LOLC/09-NodeJS/01-Activities/16-Stu_maths/Unsolved/maths");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
