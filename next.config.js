const withCSS = require("@zeit/next-css");

module.exports = {
  withCSS: withCSS(),
  webpack: config => {
    config.module.rules.push({
      test: /\.yml$/,
      loader: "js-yaml-loader"
    });
    return config;
  },
  env: {
    MapboxAccessToken:
      "pk.eyJ1Ijoia2F1bHkiLCJhIjoiY2pwYmlwMTF0MHdubzNrcGQyMXVucjlzeCJ9.2vo8QG1szbJ8qh5Ac3fftQ"
  }
};
