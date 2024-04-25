const contentful = require('contentful')

const client = contentful.createClient({
  // This space is for testing purposes only.
  // Never store your Contentful credentials in your projects config file.
  // Use: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
  space: `k8iqpp6u0ior`,
  accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
});

client
  .getEntries()
  .then((result) => console.log(`✅ Success cjs with ${result.total} entries!`))
  .catch((err) => console.log(`🚫 Error cjs:`) && console.log(err));