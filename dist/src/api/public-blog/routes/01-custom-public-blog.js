"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/public-blogs/url/:slug",
            handler: "public-blog.findBySlug",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
