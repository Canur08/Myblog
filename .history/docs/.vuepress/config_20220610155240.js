const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: gungnirTheme({
    // 你的主题配置
    navbarTitle: "Gungnir",
    locales: {
      "/": {
        navbarTitle: "Gungnir"
      },
      "/zh/": {
        navbarTitle: "冈格尼尔"
      }
    }
  })
}