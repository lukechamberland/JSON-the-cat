const request = require('request');

module.exports = (catBreed, cb) => {
  const options = {
    url: `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`,
    headers: {
      'x-api-key': '7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a'
    }
  };
  
  // implemented the server request

  request(options, (err, resp, body) => {
    if (!err) {
      if (resp.statusCode !== 200) {
        return cb(`Unsuccessful connection to the server. statusCode ${resp.statusCode}`);
      } else {
        if (body) {
          body = JSON.parse(body);
          if (body.length) {
            if (body[0].description) {
              return cb(null, body[0].description);
            } else {
              return cb(`There is no information provided for ${catBreed}.`);
            }
          } else {
            return cb(`${catBreed} cannot be found.`);
          }
        } else {
          return cb(`Server provided an empty response`);
        }
      }
    } else {
      return cb(`Could not fetch any information about '${catBreed}' from the server.`);
    }
  });
};