FROM nginx:latest
RUN apt-get update && apt-get install nano
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.backup
COPY compose/nginx/ssl/ /etc/nginx/ssl/
ADD compose/nginx/conf.d/ /etc/nginx/conf.d/