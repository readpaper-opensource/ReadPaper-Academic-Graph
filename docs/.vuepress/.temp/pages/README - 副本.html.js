import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/README - 副本.html.vue"
const data = JSON.parse("{\"path\":\"/README%20-%20%E5%89%AF%E6%9C%AC.html\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"lang\":\"en-US\",\"title\":\"Home\",\"heroText\":\"ReadPaper\",\"heroImage\":null,\"actions\":[{\"text\":\"Get Started\",\"link\":\"/entity_std_en.html\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present ReadPaper\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README - 副本.md\"}")
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
