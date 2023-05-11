/**
 * user-blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::user-blog.user-blog', {
  async findByUser(ctx) {
    try {
      const { userId } = ctx.params;
      const entries = await strapi.entityService.findMany(
        "api::user-blog.user-blog",
        {
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
        }
      );
      //console.log(entries);
      ctx.body = entries;
    } catch (err) {
      console.log(err);
    }
  },
});
