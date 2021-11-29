// mix.webpackConfig({
//   resolve: {
//     modules: ['node_modules', path.resolve(__dirname, 'assets/images')]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.svg$/,
//         use: [
//           {
//             loader: 'html-loader',
//             options: {
//               minimize: true
//             }
//           }
//         ]
//       }
//     ]
//   }
// })

// Mix.listen('configReady', function(config) {
//   const rules = config.module.rules
//   const targetRegex = /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/

//   for (let rule of rules) {
//     if (rule.test.toString() == targetRegex.toString()) {
//       rule.exclude = /\.svg$/
//       break
//     }
//   }
// })
