"use strict";

const fs = require("fs");
const { cmdManager } = require("./helpers/cmdManager");
const CMDInputBuilder = require("./helpers/cmdInputBuilder");

const main = async () => {
  const inputBuilder = new CMDInputBuilder();

  const introduction = `
    Welcome to Serverless AWS Multile Api Gateway Pattern Generator.
    Please follow below steps to generate the template
    `;

  console.log(introduction);

  let languageId = await cmdManager(inputBuilder.getLanguagePrompt());
  languageId = languageId === "" ? "1" : languageId;

  let numberOfApiGateways = await cmdManager(
    inputBuilder.getNumberOfAPIGateways()
  );
  numberOfApiGateways = numberOfApiGateways === "" ? "1" : numberOfApiGateways;
};

main();
