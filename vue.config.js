module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            '@swipe-indicator-size': '8px'
          },
        },
      },
    },
  },
};