const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('An error has occured: ', error);
  } else {
    console.log(description);
  }
});