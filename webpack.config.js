const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file
    publicPath: "/", // Public URL address of the output files when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for JavaScript/JSX files
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader", // Use file-loader for images
          },
        ],
      },
      // Add more rules here if needed for other file types (e.g., CSS)
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // File extensions to resolve
  },
  devServer: {
    contentBase: "./dist", // Serve files from the 'dist' directory
    hot: true, // Enable hot module replacement
    port: 3000, // Port for development server
    historyApiFallback: true, // Enable HTML5 history API fallback
  },
};
