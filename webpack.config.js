module.exports = {
  entry: "./app/assets/frontend/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },

        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
        },
      },
    ],
  },
};
