import comp from "E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/.html.vue"
const data = JSON.parse("{\"path\":\"/.html\",\"title\":\"实体标准\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"不同实体间关系\",\"slug\":\"不同实体间关系\",\"link\":\"#不同实体间关系\",\"children\":[]},{\"level\":2,\"title\":\"相同实体关系\",\"slug\":\"相同实体关系\",\"link\":\"#相同实体关系\",\"children\":[]},{\"level\":2,\"title\":\"属性\",\"slug\":\"属性\",\"link\":\"#属性\",\"children\":[{\"level\":3,\"title\":\"论文属性\",\"slug\":\"论文属性\",\"link\":\"#论文属性\",\"children\":[]},{\"level\":3,\"title\":\"研究者属性\",\"slug\":\"研究者属性\",\"link\":\"#研究者属性\",\"children\":[]},{\"level\":3,\"title\":\"出版方属性\",\"slug\":\"出版方属性\",\"link\":\"#出版方属性\",\"children\":[]},{\"level\":3,\"title\":\"研究机构\",\"slug\":\"研究机构\",\"link\":\"#研究机构\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\".md\"}")
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
