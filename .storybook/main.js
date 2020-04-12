const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.{js,ts,tsx}"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      // Use this to support path alias's from the root tsconfig.json
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
};
