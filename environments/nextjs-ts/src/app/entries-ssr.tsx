"use server";

import { createClient } from "contentful";

// Since server components run on the server, they cannot have state or effects like client components.
export default async function EntriesServer() {
  try {
    const client = createClient({
      space: `k8iqpp6u0ior`,
      accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
    });

    // Fetching data directly in the server component function.
    await client.getEntries();

    // Directly return the rendered component with the results.
    return <div id="server">✅ Success!</div>;
  } catch (err) {
    // Handling errors by returning a different UI or logging the error.
    console.error(`Error fetching entries: ${(err as Error).message}`);
    return <div id="server">🚫 Error: {(err as Error).message}</div>;
  }
}
