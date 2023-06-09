"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("../strapi-test-b1d0d-firebase-adminsdk-238fk-b7674cea58.json"));
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
                sortInStorage: true,
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
