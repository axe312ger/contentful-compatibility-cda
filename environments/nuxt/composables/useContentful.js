import { ref } from "vue";
import * as contentful from "contentful";

export const useContentful = () => {
  const result = ref("Loading...");
  const error = ref(null);

  const loadEntries = async () => {
    try {
      const client = contentful.createClient({
        space: `k8iqpp6u0ior`,
        accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
      });

      await client.getEntries();
      result.value = "✅ Success using composables!";
    } catch (err) {
      console.error(`Error fetching entries: ${err.message}`);
      error.value = err.message;
      result.value = `🚫 Error: ${err.message}`;
    }
  };

  // Load entries on composable initialization
  loadEntries();

  return { result, error };
};
