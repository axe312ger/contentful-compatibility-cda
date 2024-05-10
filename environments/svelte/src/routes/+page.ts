import * as contentful from "contentful";

/** @type {import('./$types').PageLoad} */ export async function load({
  params,
}) {
  try {
    const client = contentful.createClient({
      space: `k8iqpp6u0ior`,
      accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
    });

    // Fetching data directly in the server component function.
    await client.getEntries();

    // Directly return the rendered component with the results.
    return {result: "✅ Success!"}
  } catch (err) {
    // Handling errors by returning a different UI or logging the error.
    console.error(`Error fetching entries: ${(err as Error).message}`);
    return {result: `🚫 Error: ${(err as Error).message}`}
  }
}
