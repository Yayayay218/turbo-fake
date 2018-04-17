FROM node:8.10.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g pm2 serve

ENV HOME=/home/app

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/turbodl-backend

USER root
COPY . $HOME/turbodl-backend
RUN chown -R app:app $HOME/*

USER app
CMD ["serve -s -p 8080 build"]

