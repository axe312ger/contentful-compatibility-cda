import * as contentful from "contentful";

window.addEventListener('load', () => {
  try {
    const client = contentful.createClient({
      // This space is for testing purposes only.
      // Never store your Contentful credentials in your projects config file.
      // Use: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
      space: `k8iqpp6u0ior`,
      accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
    });

    const loading = document.getElementById("loading-entries");

    client
      .getEntries()
      .then((result) => (loading.innerText = `✅ Success!`))
      .catch((err) => {
        loading.innerText = `🚫 Error: ${err.message}`;
        throw err;
      });
  } catch (err) {
    loading.innerText = `🚫 Error: ${err.message}`;
    throw err;
  }
});