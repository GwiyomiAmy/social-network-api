const users = [];

const thoughts = [];

const reactions = [];

const appDescriptions = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUser = () =>
  `${getRandomArrItem(users)}`;

// Function to generate random thoughts that we can add to the database. Includes thought responses.
const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getThoughtResponses(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each thought
const getThoughtResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomUser(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought, getRandomThought };
