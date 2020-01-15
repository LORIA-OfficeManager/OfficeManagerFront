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
    },
  },
};
