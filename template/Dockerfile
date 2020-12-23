FROM node:14-alpine as builder

WORKDIR /build

COPY .npmrc package*.json ./
RUN npm install --verbose

COPY . .
RUN npm run build

FROM nginx:1.19-alpine
EXPOSE 80
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN rm /etc/nginx/conf.d/*
COPY --from=builder /build/build /data/build
COPY --from=builder /build/nginx.conf /etc/nginx/conf.d/default.conf
