"use strict";

const fs = require("fs");
const { cmdManager } = require("./helpers/cmdManager");
const CMDInputBuilder = require("./helpers/cmdInputBuilder");

const main = async () => {
  const inputBuilder = new CMDInputBuilder();

  const introduction = `
    Welcome to Serverless AWS Multile Api Gateway Pattern Generator.
    Please follow below steps to generate the template
        1. Choose language (currently only supporting TypeScript only)
        2. Number of API gateways needed to be created
        3. Main API Gateway name (can be changed after)
        4. Names of the API gateways in order to generate serverless stack files (if number of api gateways is more than 1)
        5. Whether main API Gateway needs to have multiple serverless stacks

    `;

  console.log(introduction);

  let languageId = await cmdManager(inputBuilder.getLanguagePrompt());
  languageId = languageId === "" ? "1" : languageId;

  let numberOfApiGateways = await cmdManager(
    inputBuilder.getNumberOfAPIGateways()
  );
  numberOfApiGateways = numberOfApiGateways === "" ? "1" : numberOfApiGateways;

  let manApiGatewayName = await cmdManager(
    inputBuilder.getMainAPIGatewayName()
  );
  manApiGatewayName = manApiGatewayName === "" ? "main" : manApiGatewayName;

  if (parseInt(numberOfApiGateways) > 1) {
    let apiGatewayNames = await cmdManager(inputBuilder.getAPIGatewayNames());
    const geteWayNameLength = apiGatewayNames.split(",").length;

    if (geteWayNameLength !== parseInt(numberOfApiGateways) - 1) {
      console.log(
        `Provided names length does not equal to given additional number of api gateways: ${
          parseInt(numberOfApiGateways) - 1
        }.`
      );
      apiGatewayNames = await cmdManager(inputBuilder.getAPIGatewayNames());
    }
  }

  let sharedForMain = await cmdManager(inputBuilder.getSharedAPIGatewayInput());
  sharedForMain = sharedForMain === "" ? "1" : sharedForMain;

  if (sharedForMain === "2") {
    let sharedMainPath = await cmdManager(
      inputBuilder.getAPIGatewaySharedName()
    );
  }
};

main();
