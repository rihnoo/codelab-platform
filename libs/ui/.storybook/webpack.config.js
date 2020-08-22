const rootWebpackConfig = require('../../../.storybook/webpack.config')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // eslint-disable-next-line no-param-reassign
  config = await rootWebpackConfig({ config, mode })

  config.resolve.extensions.push('.tsx')
  config.resolve.extensions.push('.ts')

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    // options: {
    //   presets: [
    //     '@babel/preset-env',
    //     '@babel/preset-react',
    //     '@babel/preset-typescript',
    //   ],
    //   plugins: [
    //     [
    //       '@babel/plugin-transform-typescript',
    //       {
    //         allowNamespaces: true,
    //       },
    //     ],
    //     '@babel/plugin-proposal-class-properties',
    //   ],
    // },
  })

  // console.log(util.inspect(config, false, null, true /* enable colors */))

  return config
}
