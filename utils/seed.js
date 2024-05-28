const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];
  const thought = getRandomThought(10);

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {

    const user = getRandomUser();
    const github = `${user}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      user,
      thought,
      github,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.insertOne({
    thoughtName: 'Today is a day.',
    inPerson: false,
    users: [...userData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});