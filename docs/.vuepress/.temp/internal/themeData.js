export const themeData = {
  "navbarTitle": "Canur08",
  "locales": {
    "/": {
      "navbarTitle": "Canur08",
      "selectLanguageName": "English"
    },
    "/zh/": {
      "navbarTitle": "卡努尔08"
    }
  },
  "personalInfo": {
    "name": "Canur08",
    "avatar": "/img/head.png",
    "description": "不知道为啥，我还是想做游戏",
    "sns": {
      "github": "Canur08",
      "linkedin": "兴兴-罗-33541721a",
      "zhihu": "ru-tong-xin-xing-yiban",
      "email": "luoxingxing08@foxmail.com",
      "bilibili": {
        "icon": "ri-bilibili-line",
        "link": "https://space.bilibili.com/15091854"
      }
    }
  },
  "homeHeaderImages": [
    {
      "path": "/img/home-bg/1.jpg",
      "mask": "rgba(40, 57, 101, .4)"
    },
    {
      "path": "/img/home-bg/2.jpg",
      "mask": "rgb(251, 170, 152, .2)"
    }
  ],
  "blogNumPerPage": 20,
  "footer": "\n      &copy; <a href=\"https://github.com/Renovamen\" target=\"_blank\">Renovamen</a> 2018-2022\n      <br>\n      Powered by <a href=\"https://v2.vuepress.vuejs.org\" target=\"_blank\">VuePress</a> &\n      <a href=\"https://github.com/Renovamen/vuepress-theme-gungnir\" target=\"_blank\">Gungnir</a>\n    ",
  "pages": {
    "tags": {
      "subtitle": "吼哇朋友们，这是标签页",
      "bgImage": {
        "path": "/img/pages/tags.jpg",
        "mask": "rgba(211, 136, 37, .5)"
      }
    },
    "links": {
      "subtitle": "吼哇朋友们，这是链接页",
      "bgImage": {
        "path": "/img/pages/links.jpg",
        "mask": "rgba(64, 118, 190, 0.5)"
      }
    }
  },
  "hitokoto": false,
  "catalog": true,
  "searchIcon": "ri-search-2-line",
  "langIcon": "hi-translate",
  "navbar": [],
  "repo": null,
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": false,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page on GitHub",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "searchText": "Search",
  "info": "INFO",
  "tip": "TIP",
  "warning": "WARNING",
  "danger": "DANGER",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "$ cd /home/",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar",
  "pageText": {
    "tags": "Tags",
    "links": "Links"
  },
  "showAllTagsText": "Show All",
  "postNext": "Next",
  "postPrev": "Previous",
  "homeNext": "← Newer Posts",
  "homePrev": "Older Posts →",
  "pwaPopupMessage": "New content is available.",
  "pwaPopupButtonText": "Refresh",
  "headerImageCredit": "Image by",
  "search": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
