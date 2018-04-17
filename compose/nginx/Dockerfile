FROM nginx:latest
RUN apt-get update && apt-get install nano
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.backup
COPY ssl/ /etc/nginx/ssl/
ADD conf.d/ /etc/nginx/conf.d/