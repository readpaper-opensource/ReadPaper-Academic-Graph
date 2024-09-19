import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/contributors.html.vue"
const data = JSON.parse("{\"path\":\"/contributors.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Contributors\",\"slug\":\"contributors\",\"link\":\"#contributors\",\"children\":[]}],\"git\":{\"updatedTime\":1726130711000},\"filePathRelative\":\"contributors.md\"}")
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
