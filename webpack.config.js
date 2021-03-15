const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntries = require("webpack-fix-style-only-entries");

// Index page
const index = {
  mode: "development",  //公開時にはproductionに設定する
  entry: {
    index: "./src/scripts/index.js",
    "index.css": "./src/style/scss/index.scss",
    },
  output: {
    filename: "js/[name].bundle.js",  // [name] inherits it's entry name
  },
  watch: true,
  plugins: [    
    new HtmlWebpackPlugin({         // Generate member1.html
      hash: true,
      template: './src/index.ejs',
      filename: './index.html',
      meta: {description: 'WEBSTAFFINGは、グローバルに展開するWeb制作集団です。'}
    }),
    new MiniCssExtractPlugin({      // Output styles into an external CSS file (index.css)
      filename: './style/[name]',
    }),
    new FixStyleOnlyEntries(),      // Remove unnecessary empty js files (index.css.bundle.js)
    new MiniCssExtractPlugin({
      filename: "./style/[name]"
    })
  ],
  module: {
    rules: [
      {
        test : /\.ejs$/,
        use: [
          "ejs-webpack-loader"       // Enable ejs loading
        ]
      },
      {
        test:/\.scss/,
        use: [
          "style-loader",            // Add CSS to link tag
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          {
            loader: "css-loader",     // Bundle CSS into JS
            options: {
              url: false,
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",     // Load Sass
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },    
          }
        ]
      }
    ]
  }
}

// Member page
const member = {
  mode: "development",  //公開時にはproductionに設定する
  entry: {
    member: "./src/scripts/member.js",
    "member.css": "./src/style/scss/member.scss",
    },
  output: {
    filename: "js/[name].bundle.js",  // [name] inherits it's entry name
  },
  watch: true,
  plugins: [    
    new HtmlWebpackPlugin({         // Generate member1.html
      hash: true,
      template: './src/member1.ejs',
      filename: './member1.html',
      meta: {description: 'Webディレクター - WEBSTAFFINGのキャリアパス'},
    }),
    new HtmlWebpackPlugin({         // Generate member2.html
      hash: true,
      template: './src/member2.ejs',
      filename: './member2.html',
      meta: {description: 'マーケティングスペシャリスト - WEBSTAFFINGのキャリアパス'},
    }),
    new HtmlWebpackPlugin({         // Generate member3.html
      hash: true,
      template: './src/member3.ejs',
      filename: './member3.html',
      meta: {description: 'フロントエンドエンジニア - WEBSTAFFINGのキャリアパス'},
    }),
    new MiniCssExtractPlugin({      // Output styles into an external CSS file (member.css)
      filename: './style/[name]',
    }),
    new FixStyleOnlyEntries(),      // Remove unnecessary empty js files (member.css.bundle.js)
    new MiniCssExtractPlugin({
      filename: "./style/[name]"
    })
  ],
  module: {
    rules: [
      {
        test : /\.ejs$/,
        use: [
          "ejs-webpack-loader"       // Enable ejs loading
        ]
      },
      {
        test:/\.scss/,
        use: [
          "style-loader",            // Add CSS to link tag
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          {
            loader: "css-loader",     // Bundle CSS into JS
            options: {
              url: false,
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",     // Load Sass
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },    
          }
        ]
      }
    ]
  }
}

// 404 page
const notFound = {
  mode: "development",  //公開時にはproductionに設定する
  entry: {
    404: "./src/scripts/common/app.js",
    "404.css": "./src/style/scss/404.scss",
    },
  output: {
    filename: "js/[name].bundle.js",  // [name] inherits it's entry name
  },
  watch: true,
  plugins: [    
    new HtmlWebpackPlugin({         // Generate 404.html
      hash: true,
      template: './src/404.ejs',
      filename: './404.html',
      meta: {description: 'WEBSTAFFINGは、グローバルに展開するWeb制作集団です。'}
    }),
    new MiniCssExtractPlugin({      // Output styles into an external CSS file (404.css)
      filename: './style/[name]',
    }),
    new FixStyleOnlyEntries(),      // Remove unnecessary empty js files (404.css.bundle.js)
    new MiniCssExtractPlugin({
      filename: "./style/[name]"
    })
  ],
  module: {
    rules: [
      {
        test : /\.ejs$/,
        use: [
          "ejs-webpack-loader"       // Enable ejs loading
        ]
      },
      {
        test:/\.scss/,
        use: [
          "style-loader",            // Add CSS to link tag
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          {
            loader: "css-loader",     // Bundle CSS into JS
            options: {
              url: false,
              sourceMap: true,
            }
          },
          {
            loader: "sass-loader",     // Load Sass
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },    
          }
        ]
      }
    ]
  }
}

module.exports = [index, member, notFound];
