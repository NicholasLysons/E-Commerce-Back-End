const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'product_id',
});

Product.belongsToMany(ProductTag)

Tag.belongsToMany(Product)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
