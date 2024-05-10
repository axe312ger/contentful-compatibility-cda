const { exec } = require("child_process");
const glob = require("glob");
const path = require("path");
const fs = require("fs");

function getWorkspaces() {
  const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));
  return packageJson.workspaces.map((pattern) => glob.sync(pattern)).flat();
}

function runTest(workspace) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now(); // Capture the start time
    console.log(`Testing ${workspace}...`);
    exec(`npm test --workspace ${workspace}`, (error, stdout, stderr) => {
      const duration = (Date.now() - startTime) / 1000; // Calculate the duration in seconds
      if (error) {
        console.error(`Test failed for ${workspace} in ${duration}:`);
        console.log(stdout);
        console.log(stderr);
        resolve({ workspace, success: false, duration });
      } else {
        console.log(`Test succeeded for ${workspace} in ${duration}`);
        resolve({ workspace, success: true, duration });
      }
    });
  });
}


async function runAllTests() {
  const workspaces = getWorkspaces();
  const results = [];
  for (const workspace of workspaces) {
    const result = await runTest(workspace);
    results.push(result);
  }

  console.log("\nTest Summary:");
  results.forEach((result) => {
    console.log(
      `${result.workspace}: ${result.success ? "✅ Passed" : "🚫 Failed"} in ${
        result.duration
      } seconds`
    );
  });
}


runAllTests();
