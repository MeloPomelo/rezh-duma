FROM node AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/duma-app /usr/share/nginx/html
