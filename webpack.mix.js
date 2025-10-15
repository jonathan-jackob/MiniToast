let mix = require("laravel-mix");

mix.setPublicPath("dist");

mix.js("src/js/app.js", "js");

mix.sass("src/styles/app.scss", "css");