import * as data from "../strapi-test-b1d0d-firebase-adminsdk-238fk-b7674cea58.json";
module.exports = ({ env }) => ({
    meilisearch: {
        config: {
            // Your meili host
            host: "https://ms-3b7d49c8d7d8-3515.sfo.meilisearch.io",
            // Your master key or private key
            apiKey: "4bfa3dd77b4454e7596e2e5b5fd1cc27d5ee0c29",
        }
    },
    // ...
    upload: {
        config: {
            provider: "strapi-provider-firebase-storage",
            providerOptions: {
                serviceAccount: data,
                // Custom bucket name
                bucket: env("STORAGE_BUCKET_URL"),
                sortInStorage: true, // true | false
                debug: false, // true | false
            },
        },
    },
    // ...
    'size-picker': {
        enabled: true,
        resolve: './src/plugins/size-picker'
      },
});