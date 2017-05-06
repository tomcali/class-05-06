module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }

    // add to model for Post via sequelize via associations
    // creating relationship via belongsTo'
    // setting up foreign key inside the Post table

        // ,
    //       author_name: {
    //           type: DataTypes.STRING,
    //           allowNull: false,
    //           len: [1]
    //       }
  }
  // Add another "configuration" obect as an argument to set up an association to Authors
  // Example: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
  );
  return Post;
};
