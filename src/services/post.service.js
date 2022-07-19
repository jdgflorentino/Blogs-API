const { BlogPost, Category, User } = require('../database/models');

const getAllPosts = async () => { 
  const posts = await BlogPost.findAll(
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
);
  return posts;
};

module.exports = { getAllPosts };