mkdir client server
touch server/index.js server/package.json Dockerfile .dockerignore render.yaml client/src/App.js client/src/App.css client/package.json

cd client
npm init
sudo npm install -g create-react-app@latest


docker build -t hello-monolith .
docker run -p 10000:10000 hello-monolith