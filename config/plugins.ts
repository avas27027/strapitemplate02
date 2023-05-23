import * as data from "../strapi-test-b1d0d-firebase-adminsdk-238fk-b7674cea58.json";
module.exports = ({ env }) => ({
    meilisearch: {
        config: {
            // Your meili host
            host: "https://ms-8aa77a5e31ca-3515.sfo.meilisearch.io",
            // Your master key or private key
            apiKey: "95ddfce9e09294b5ccdf0e9e621724c0ab96bf5c",
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
});