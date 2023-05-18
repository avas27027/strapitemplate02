export default ({ env }) => ({
  //host: "localhost",
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //url: env('URL', 'localhost'),
  url: env('', 'http://localhost:1337'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
