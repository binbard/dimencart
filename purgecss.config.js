module.exports = {
  output: "dist/css",
  content: ['index.html','aboutus.html'],
  css: [
  './node_modules/bootstrap/dist/css/bootstrap.min.css',
  './node_modules/fomantic-ui-css/semantic.min.css',
  './node_modules/swiper/swiper-bundle.min.css',
  './node_modules/animate.css/animate.min.css',
  './node_modules/@mdi/font/css/materialdesignicons.min.css',
  './src/css/*.css',
  ]
}