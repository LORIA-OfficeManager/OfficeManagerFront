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
      officeDate: '/office/date/:timestamp',
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
