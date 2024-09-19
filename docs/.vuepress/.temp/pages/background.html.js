import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/background.html.vue"
const data = JSON.parse("{\"path\":\"/background.html\",\"title\":\"Background of the ReadPaper Academic Graph\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1725498147000},\"filePathRelative\":\"background.md\"}")
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
