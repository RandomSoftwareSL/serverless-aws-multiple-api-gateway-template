# serverless-aws-multiple-api-gateway-template

Template for creating template using multiple api gateway pattern for AWS using Serverless framework.

<br />

## Why do you want to use it?

Currently there is no template available in serverless to cater multiple api gateway pattern. Following advantages will be applied when using this template

- Each api gateway will get its own serverless template file
- Ability to configure the common base api path if there are shared apis
- Avoid reaching cloud formation limitation of 500 resource limit
- Centralized approach for creating AWS cloud resources
- Centralized approach for lambda authorizers
