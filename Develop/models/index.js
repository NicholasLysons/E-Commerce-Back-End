const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {})
// Categories have many Products
Category.haveToMany(Product, {})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag)
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag)
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
