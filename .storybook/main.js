const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.{js,ts,tsx}"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      // Use this to support path alias's from the root tsconfig.json
      new TsconfigPathsPlugin(),
    ];

    config.module.rules[0].use[0].options.presets = [
      ...config.module.rules[0].use[0].options.presets,
      // Allow using the css prop from emotion
      require.resolve("@emotion/babel-preset-css-prop"),
    ];

    return config;
  },
};
