import "./style.css";
import * as contentful from "contentful";

try {
  const client = contentful.createClient({
    // This space is for testing purposes only.
    // Never store your Contentful credentials in your projects config file.
    // Use: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
    space: `k8iqpp6u0ior`,
    accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
  });

  const loading = document.getElementById("loading-entries");

  if (!loading) {
    throw new Error('Can not find element #loading-entries');
  }

  client
    .getEntries()
    .then(() => (loading.innerText = `✅ Success!`))
    .catch((err) => {
      loading.innerText = `🚫 Error: ${err.message}`;
      throw err;
    });
} catch (err) {
  const loading = document.getElementById("loading-entries");
  if (loading) {
    loading.innerText = `🚫 Error: ${(err as Error).message}`;
  }
  throw err;
}
