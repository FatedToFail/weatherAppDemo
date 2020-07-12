
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
  console.log(`Wrote variables to ${targetPath}`);
});

writeFile('./src/environments/environment.ts', initEnvironmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
