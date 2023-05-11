export default {
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