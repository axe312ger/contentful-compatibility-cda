import { Text } from "react-native";
import { useEffect, useState } from "react";

import { createClient } from "contentful";

console.dir({ createClient }, { depth: null });

export default function Contentful() {
  const [result, setResult] = useState("Loading...");

  useEffect(() => {
    const load = async () => {
      try {
        const client = createClient({
          // This space is for testing purposes only.
          // Never store your Contentful credentials in your projects config file.
          // Use: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
          space: `k8iqpp6u0ior`,
          accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
        });

        await client.getEntries();
        setResult(`✅ Success`);
      } catch (err) {
        setResult(`🚫 Error: ${err.message}`);
        throw err;
      }
    };

    load();
  }, []);

  return <Text id="loading-entries">{result}</Text>;
}