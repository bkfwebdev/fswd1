FROM node:20 AS build
ARG VITE_BACKEND_URL=https://improved-potato-5g6g7jj5g67hw9g-3001.app.github.dev/
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build   
FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .