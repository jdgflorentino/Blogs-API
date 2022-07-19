module.exports = (sequelize, DataTypes) => { 
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
  },
    { timestamps: false, });
  
  PostCategory.associate = (models) => { 
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      as: 'BlogPost',
      through: 'PostCategories',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'categories',
      through: 'PostCategories',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};