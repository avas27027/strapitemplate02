import { Strapi } from '@strapi/strapi';

export default module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'size',
    plugin: 'size-picker',
    type: 'string',
  });
};