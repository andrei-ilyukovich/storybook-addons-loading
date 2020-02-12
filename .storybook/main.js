const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    require.resolve('./changelog/register.js')
  ],

  // In 5.2.* version it was necessary to create managerWebpack config which was loaded by presets.js file.
  // This allowed storybook to properly transpile custom addon files.
  // In 5.3.* and 6.0.0-alpha* this config is not working anymore, uncommenting the block below doesn't have any effect

  /*managerWebpack: async (baseConfig, options) => {
    baseConfig.module.rules.push({
      test: /(\.jsx?|\.tsx?)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, "./tsconfig.json")
          }
        }
      ]
    });
    baseConfig.module.rules.push({ test: /\.md$/, use: [{ loader: "raw-loader" }] });
    baseConfig.resolve.extensions.push(".ts", ".tsx");
    return baseConfig;
  }*/
};
