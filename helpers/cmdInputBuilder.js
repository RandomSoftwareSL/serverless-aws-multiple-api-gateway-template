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

  getMainAPIGatewayName() {
    return `
    Main API Gateway name(default is main): `;
  }

  getAPIGatewayNames() {
    return `
    Names for additional generated API Gateways
    (add as comma separated values): `;
  }

  getSharedAPIGatewayInput() {
    return `
    Does main API Gateway need to have shared serverless stacks?
    (1) false
    (2) true
    (default is false): `;
  }

  getAPIGatewaySharedName() {
    return `
    Common path for shared gateway: `;
  }
}

module.exports = CMDInputBuilder;
