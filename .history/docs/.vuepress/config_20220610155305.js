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
    },
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Cool Dragon",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.jpeg",

      // 必须：个人简介，将在首页显示
      description: "A cool dragon lost in human world.",
      
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "Renovamen",  // Github
        linkedin: "xiaohan-zou-55bba0160",  // 领英
        facebook: "renovamen.zou",  // Facebook
        twitter: "renovamen_zxh",  // 推特
        zhihu: "chao-neng-gui-su",  // 知乎
        weibo: "your-weibo-id",  // 新浪微博
        email: "renovamenzxh@gmail.com",  // 邮箱
        rss: "/rss.xml",  // RSS 文件的链接
        // 添加其他的社交平台
        bilibili: {  // 随便什么名字
          icon: "ri-bilibili-line",  // 社交平台的图标
          link: "https://www.bilibili.com/"  // 主页链接
        }
        // ...
      }
    }
  })
}