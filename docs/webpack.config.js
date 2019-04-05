const path = require('path')

module.exports = async ({ config }) => {

  // Storysource
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      require.resolve('@storybook/addon-storysource/loader')
    ],
    enforce: 'pre'
  })

  // TypeScript docgen


  return config
}
