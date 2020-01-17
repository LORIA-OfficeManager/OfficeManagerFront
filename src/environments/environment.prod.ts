/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '92.222.9.74',
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
    },
  },
};
