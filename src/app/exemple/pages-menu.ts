import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/exemple/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/exemple/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/exemple/layout/stepper',
      },
      {
        title: 'List',
        link: '/exemple/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/exemple/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/exemple/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/exemple/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/exemple/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/exemple/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/exemple/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/exemple/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/exemple/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/exemple/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/exemple/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/exemple/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/exemple/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/exemple/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/exemple/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/exemple/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/exemple/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/exemple/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/exemple/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/exemple/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/exemple/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/exemple/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/exemple/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/exemple/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/exemple/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/exemple/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/exemple/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/exemple/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/exemple/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/exemple/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/exemple/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/exemple/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/exemple/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/exemple/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/exemple/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/exemple/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
