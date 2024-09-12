import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"lang\":\"en-US\",\"title\":\"Home\",\"heroText\":\"ReadPaper\",\"heroImage\":null,\"actions\":[{\"text\":\"Get Started\",\"link\":\"/entity_std_en.html\",\"type\":\"primary\"}],\"features\":null,\"-title\":null,\"footer\":\"MIT Licensed | Copyright © 2024-present ReadPaper\"},\"headers\":[],\"git\":{\"updatedTime\":1725498147000,\"contributors\":[{\"name\":\"bowen xue\",\"email\":\"xuebowen@idea.edu.cn\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
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
