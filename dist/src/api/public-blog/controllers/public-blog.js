"use strict";
/**
 * public-blog controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::public-blog.public-blog', {
    async findBySlug(ctx) {
        try {
            const { slug } = ctx.params;
            const entries = await strapi.entityService.findMany("api::public-blog.public-blog", {
                filters: {
                    slug: slug,
                },
                populate: {
                    author: {
                        fields: ["id"],
                    },
                    blogPicture: { fields: ["formats"] },
                },
            });
            //console.log(entries);
            ctx.body = entries;
        }
        catch (err) {
            console.log(err);
        }
    },
});
