FROM node:latest
EXPOSE 3000
ADD . /app
RUN cd app
RUN npm install mosca bunyan -g
RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]
