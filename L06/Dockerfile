## ベースイメージにPHP+Apacheを利用
FROM php:7.0-apache

## MySQLクライアントインストール
RUN apt-get update && apt-get install -y \
    && apt-get install -y libmcrypt-dev mysql-client \
    && apt-get install -y zip unzip git vim

## PHPの拡張機能のインストール
RUN docker-php-ext-install pdo_mysql session json mbstring
COPY php/ /var/www/html/
