module.exports = ({ env }) => ({
    meilisearch: {
      config: {
        // Your meili host
        host: "https://ms-dbbe741936fb-3515.sfo.meilisearch.io",
        // Your master key or private key
        apiKey: "4bf239e1614ad7c802e75d5b4ade24678c49cfe5",
      }
    },
    // ...
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: require("/Users/alvarosotelo/Documents/GitHub/strapi-template-02/strapi-test-b1d0d-firebase-adminsdk-238fk-b7674cea58.json"),
          // Custom bucket name
          bucket: env("STORAGE_BUCKET_URL"),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
    // ...
  });