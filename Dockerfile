FROM nginx:1.19.6
MAINTAINER devops@idea.edu.cn
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default-conf-bak
ADD ./docs/.vuepress/dist  /etc/nginx/html/console
ADD nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT nginx -g "daemon off;"
