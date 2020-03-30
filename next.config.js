const withCSS = require("@zeit/next-css");

module.exports = {
  withCSS: withCSS(),
  webpack: config => {
    config.module.rules.push({
      test: /\.yml$/,
      loader: "js-yaml-loader"
    });
    return config;
  }
};
