首先要运行
``
$ npm install -D vuepress@next
``

# 运行热重载的开发服务器
node version == v20.15.0

npm version == 10.7.0

启动脚本是run.sh

".\node_modules\@vuepress\theme-default\lib\client\styles\vars.scss" 调整白天模式的主题颜色

".\node_modules\@vuepress\theme-default\lib\client\styles\vars-dark.scss" 调整黑夜模式的主题颜色

".\docs\README.md"作起始页，home参数调整是否有起始页。

在".\docs"文件夹下的markdwon文件会自动编译成对应的html并展示

".\docs\.vuepress\public\logo.png"是图标文件

".\docs\.vuepress\config.js"  可更改网站标题和描述

启动命令为
``
$ npm run docs:dev
``

如果出现权限问题，请使用
``
$ chmod +x ./node_modules/.bin/vuepress
``

更方便的方法是使直接使用启动脚本。

# 构建静态的可以部署的文件

npm version == 10.7.0

构建命令为
``
$ npm run docs:build
``

如果出现权限问题，请使用
``
$ chmod +x ./node_modules/.bin/vuepress
``

该构建命令会在./docs/.vuepress/dist  生成可部署的静态文件