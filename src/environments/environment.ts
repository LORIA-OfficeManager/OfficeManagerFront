/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '51000',
    endpoints: {
      allOffice: '/office',
      oneOffice: '/office/:id',
      allPeople: '/people',
      allDepartment: '/department',
      oneDepartment: '/department/:id',
    },
  },
};

export function baseUrl() {

  // build backend base url
  let url = `${environment.backend.protocol}://${environment.backend.host}`;
  if (environment.backend.port) {
    url += `:${environment.backend.port}`;
  }
  return url;
}

export function endpoints() {
   const backends = {};
  // build all backend urls
  Object.keys(environment.backend.endpoints).forEach(
      k => backends[ k ] = `${baseUrl()}${environment.backend.endpoints[ k ]}`);
  return backends;
}
