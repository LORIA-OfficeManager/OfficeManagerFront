/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '51000',
    endpoints: {
      allOffice: '/office',
      oneOffice: '/office/:id',
      importOffice: '/import/office',
      importPerson: '/import/person',
      allPeople: '/people',
      onePerson: '/people/:id',
      assignement: '/assignment/:idO/:idP',
      unassignement: '/assignment/delete/:id',
      allDepartment: '/department',
      oneDepartment: '/department/:id',
      updateCapacity: '/office/capacity',
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
