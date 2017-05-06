// How can we restructure our database tables if we
// wanted the ability to form a relationship between a Post and an Author?
//
// What would we have to change with these tables to make that possible?
//
// Which table would have a foreign key and why?
// What would that look like?
// Remember, an Author can and will have multiple Posts,
// but a Post will only have a single Author.
//
// Assume we won’t be making a third table.
//
//
// --------------------
// The goal of this exercise is to modify the Post and Author
// models so that they are associated with eachother.
//
// Open the folder slacked out to you.
//
// Run npm install
//
// Open the config folder and update the config.json file’s
// development object to match your own local MySQL database.
//
// Navigate to the post.js file.
//
// You will need to pass in a configuration object as a
// third argument into the sequelize.define method in order
// to set up a relation. There’s an example of this being
// done with a belongsTo association here:
// http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
//
// This may take a few tries to implement correctly in your
// own Post model (There’s a lot of curly braces there!).
// You can verify your code works by starting your node server
// and then checking MySQL Workbench. If the Posts table
// now has a foreign key of AuthorId, you were successful.
// Bonus: If you complete the exercise before time’s up,
// navigate to the author.js file and add a hasMany association
// from the Author model to the Post Model. A perfect example can be found here: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelsuserjs
//
// Note After this activity we have just one more
// step to complete the app and get it fully functioning.