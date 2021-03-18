FROM nginx
# 该镜像是基于nginx:latest镜像构建的

RUN rm /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/


COPY dist/ /root/dist/
#将项目根目录下dist文件夹（构建之后才会生成）下的所有文件复制到镜像/root/dist/目录下
