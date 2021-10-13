export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61667d5b8840108fe93e5bd3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-3-studio-p1fqrhdu",
                  apiId: "ad820d85-45d7-4a27-be4d-d22ecd664a1f",
                },
                {
                  buildHookId: "61667d5c2bb7ec8782d3e21d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-3-web-4sbq2znd",
                  apiId: "49cec3d9-89c4-4d3d-9e2d-0f4c4f5df6cc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stikjeknowit/sanity-gatsby-blog3",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-3-web-4sbq2znd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
