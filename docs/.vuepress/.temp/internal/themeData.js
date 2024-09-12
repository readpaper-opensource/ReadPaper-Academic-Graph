export const themeData = JSON.parse("{\"logo\":\"./logo.png\",\"repo\":\"https://github.com/readpaper-opensource/ReadPaper-Academic-Graph\",\"repoLabel\":\"Github\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Background\",\"link\":\"/background.html\"},{\"text\":\"RAG\",\"link\":\"/RAG.html\"},{\"text\":\"Entity Standards\",\"link\":\"/entity_std_en.html\"},{\"text\":\"Languages\",\"prefix\":\"/\",\"children\":[{\"text\":\"English\",\"link\":\"/entity_std_en.html\"},{\"text\":\"简体中文\",\"link\":\"/entity_std_ch.html\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
