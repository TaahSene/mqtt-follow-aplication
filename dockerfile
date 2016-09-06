FROM node:latest
ADD . /app
RUN cd app
RUN npm install mosca bunyan -g
RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]
