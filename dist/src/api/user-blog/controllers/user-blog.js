"use strict";
/**
 * user-blog controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::user-blog.user-blog', {
    async findByUser(ctx) {
        try {
            const { userId } = ctx.params;
            const entries = await strapi.entityService.findMany("api::user-blog.user-blog", {
                filters: {
                    author: {
                        id: userId,
                    },
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
