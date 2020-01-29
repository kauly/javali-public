const withCSS = require("@zeit/next-css");

module.exports = {
  withCSS: withCSS(),
  env: {
    MapboxAccessToken:
      "pk.eyJ1Ijoia2F1bHkiLCJhIjoiY2pwYmlwMTF0MHdubzNrcGQyMXVucjlzeCJ9.2vo8QG1szbJ8qh5Ac3fftQ"
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader"
    });
    return config;
  }
};
