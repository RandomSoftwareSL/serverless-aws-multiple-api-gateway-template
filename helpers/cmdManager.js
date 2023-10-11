"use-strict";

const cmdManager = async (prompt) => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(prompt, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

module.exports = {
  cmdManager,
};
