<script setup>
import ContentfulComponent from "@/components/ContentfulComponent.vue";
import * as contentful from "contentful";

let result = "Loading...";
try {
  const client = contentful.createClient({
    space: "k8iqpp6u0ior",
    accessToken: "hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw",
  });

  await client.getEntries();
  result = "✅ Success!";
} catch (err) {
  console.error(`Error fetching entries: ${err.message}`);
  result = `🚫 Error: ${err.message}`;
}
</script>

<template>
  <div>
    <h1>Contentful v11 &amp; nuxtjs v3</h1>
    <h2>Core App Component using script setup</h2>
    <div id="result-script">{{ result }}</div>
    <ContentfulComponent />
  </div>
</template>
