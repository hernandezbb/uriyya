module.exports = {
  packagerConfig: {},
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/renderer-process/index.html",
              js: "./src/renderer-process/index.ts",
              name: "main_window"
            }
          ]
        }
      }
    ]
  ]
};
