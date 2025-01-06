FROM node 
LABEL app=my-node-app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD node ./bin/www 
# CMD ["ls", "*"]
# CMD ["node", "/app/bin/www"]
# ENTRYPOINT node /app/bin/www 
EXPOSE 3000
