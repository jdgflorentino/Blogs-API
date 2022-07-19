const { Category } = require('../database/models');

const createCategory = async (name) => { 
  const category = await Category.create({ name });
  console.log(category);
  return category;
};

module.exports = { createCategory };