const path = require('path');

module.exports = {
  mode: 'production', 
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Applies style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif)$/, // Matches image files
        use: [
          {
            loader: 'file-loader', // Loads the image files
            options: {
              name: '[name].[ext]', // Keeps original file names
              outputPath: 'images/', // Output directory for images
            },
          },
          {
            loader: 'image-webpack-loader', // Optimizes image files
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
  plugins: [
    // Add any plugins here if needed
  ],
  optimization: {
    minimize: true, // Minimizes the output bundle
  },
};
