"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: "localhost",
    port: env.int('PORT', 1337),
    //url: env('', 'https://strapi02.onrender.com/'),
    //url: env('', 'http://localhost:1337'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS'),
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});
