const { Category } = require('../database/models');

const createCategory = async (name) => { 
  const category = await Category.create({ name });
  console.log(category);
  return category;
};

const getAllCategories = async () => { 
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };