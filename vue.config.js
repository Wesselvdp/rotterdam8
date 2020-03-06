module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {
      fix: true,
    },
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },

  filenameHashing: false,
};
