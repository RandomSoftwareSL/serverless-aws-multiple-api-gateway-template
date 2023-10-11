"use strict";

class CMDInputBuilder {
  constructor() {}
  getLanguagePrompt() {
    let languageOptions = "(1) TypeScript";
    return `
    Choose language:
    ${languageOptions}
    (default is TypeScript): `;
  }

  getNumberOfAPIGateways() {
    return `
    Number of API Gateways (default is 1): `;
  }
}

module.exports = CMDInputBuilder;
