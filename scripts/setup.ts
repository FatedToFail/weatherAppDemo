const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;


const environmentFileContent = `
export const environment = {
   production: ${process.env.PROD_IS_PRODUCTION},
   API_URL: '${process.env.PROD_API_URL}',
   ANOTHER_API_SECRET: '${process.env.PROD_API_KEY}'
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});
