import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/README_ch.html.vue"
const data = JSON.parse("{\"path\":\"/README_ch.html\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"lang\":\"zh-CN\",\"title\":\"主页\",\"heroText\":\"ReadPaper\",\"heroImage\":null,\"actions\":[{\"text\":\"开始\",\"link\":\"/entity_std_ch.html\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present ReadPaper\"},\"headers\":[],\"git\":{\"updatedTime\":1725498147000,\"contributors\":[{\"name\":\"bowen xue\",\"email\":\"xuebowen@idea.edu.cn\",\"commits\":1}]},\"filePathRelative\":\"README_ch.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
