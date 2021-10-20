export default {
  buildModules: ["@nuxtjs/tailwindcss"],
  components: true,
  head: {
    titleTemplate: "Crappo: %s",
  },
  css: ["~layouts/global.css", "~/assets/css/style.scss"],
  plugins: [
    "~/plugins/Trends.js",
    { src: "~/plugins/vue-apexchart.client.js", ssr: false, mode: "client" },
  ],
  build: {
    transpile: ["vue-apexchart.js"],
  },
};
