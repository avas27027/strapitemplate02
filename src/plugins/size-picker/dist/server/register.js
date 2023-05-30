"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module.exports = ({ strapi }) => {
    strapi.customFields.register({
        name: 'size',
        plugin: 'size-picker',
        type: 'string',
    });
};
