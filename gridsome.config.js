// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
var slugify = require("slugify");

module.exports = {
  siteName: "Box",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "uploads/posts/**/*.md",
        typeName: "Post",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "uploads/coaches/**/*.md",
        typeName: "Coach",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ],
  templates: {
    Post: [
      {
        path: node => {
          return `/${slugify(node.title)}`;
        }
      }
    ],
    Coach: [
      {
        path: node => {
          return `/${slugify(node.name)}`;
        }
      }
    ]
  },
};
