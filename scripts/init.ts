const { writeFile } = require('fs');

const initEnvironmentFileContent = `
export const environment = {
  production: false,
  API_URL: null,
  API_KEY: null,
  PROD_GEO_API_KEY: null,
  PROD_GEO_API_URL: null,
};
`;

writeFile('./src/environments/environment.prod.ts', initEnvironmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Wrote variables to ./src/environments/environment.prod.ts');
});

writeFile('./src/environments/environment.ts', initEnvironmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Wrote variables to ./src/environments/environment.ts');
});
