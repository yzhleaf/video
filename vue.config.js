// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
//         target: 'https://www.baidu.com',
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
