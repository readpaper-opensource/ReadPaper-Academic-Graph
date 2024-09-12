export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/background.html", { loader: () => import(/* webpackChunkName: "background.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/background.html.js"), meta: {"title":"Background of the ReadPaper Academic Graph"} }],
  ["/entity_std_ch.html", { loader: () => import(/* webpackChunkName: "entity_std_ch.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/entity_std_ch.html.js"), meta: {"title":"实体标准"} }],
  ["/entity_std_en.html", { loader: () => import(/* webpackChunkName: "entity_std_en.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/entity_std_en.html.js"), meta: {"title":"Entity Standards"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/RAG.html", { loader: () => import(/* webpackChunkName: "RAG.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/RAG.html.js"), meta: {"title":"The reasons for the birth of RAG"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/README_ch.html", { loader: () => import(/* webpackChunkName: "README_ch.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/README_ch.html.js"), meta: {"title":"主页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
