export default {
    routes: [
      {
        method: "GET",
        path: "/user-blogs/user/:userId",
        handler: "user-blog.findByUser",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };