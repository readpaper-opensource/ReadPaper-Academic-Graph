import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'ReadPaper Academic Graph',
  description: 'ReadPaper Academic Graph',

  theme: defaultTheme({
    logo: './logo.png',
    repo: 'https://github.com/readpaper-opensource/ReadPaper-Academic-Graph',
    repoLabel: 'Github',
    contributors: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Background',
        link: '/background.html',
      },
      {
        text: 'RAG',
        link: '/RAG.html'
      },
      {
        text: 'Entity Standards',
        link: '/entity_std_en.html'
      },
      {
        text: 'Languages',
        prefix: '/',
        children: [
          {
            text:'English',
            link:'/entity_std_en.html'
          },
          {
            text:"简体中文",
            link:'/entity_std_ch.html'
          }
        ],
      },
      {
        text:"Contributors",
        link:'/contributors.html'
      }
    ],
  }),


  
  bundler: viteBundler(),
})
