const path = require("path");

module.exports = {
  entry: "./src/index.js", // Точка входа
  output: {
    filename: "bundle.js", // Имя выходного файла
    path: path.resolve(__dirname, "dist"), // Папка для выходного файла
  },
  mode: "development", // Режим разработки
  module: {
    rules: [
      {
        test: /\.js$/, // Применяем правила к файлам .js
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: "babel-loader", // Используем Babel для транспиляции
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Добавляем поддержку для .js файлов
  },
};
