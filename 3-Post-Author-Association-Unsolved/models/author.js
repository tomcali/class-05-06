module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });
  return Author;
};

//  here the author will have many possible posts
// on delete cascade... when author deleted all posts will b deleted as well