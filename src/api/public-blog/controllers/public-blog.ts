/**
 * public-blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::public-blog.public-blog', {
    async findBySlug(ctx) {
        try {
            const { slug } = ctx.params;
            const entries = await strapi.entityService.findMany(
                "api::public-blog.public-blog",
                {
                    filters: {
                        slug: slug,
                    },
                    populate: {
                        author: {
                            fields: ["id"],
                        },
                        blogPicture: { fields: ["formats"] },
                    },
                }
            );
            //console.log(entries);
            ctx.body = entries;
        } catch (err) {
            console.log(err);
        }
    },
});
