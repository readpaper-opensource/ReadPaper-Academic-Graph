import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/RAG.html.vue"
const data = JSON.parse("{\"path\":\"/RAG.html\",\"title\":\"The reasons for the birth of RAG\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1725498147000,\"contributors\":[{\"name\":\"bowen xue\",\"email\":\"xuebowen@idea.edu.cn\",\"commits\":1}]},\"filePathRelative\":\"RAG.md\"}")
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
