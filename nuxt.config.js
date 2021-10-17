export default {
  buildModules: ["@nuxtjs/tailwindcss"],
  components: true,
  head: {
    titleTemplate: "Crappo: %s",
  },
  css: ["~layouts/global.css"],
  plugins: [
    "~/plugins/Trends.js",
    { src: "~/plugins/vue-apexchart.client.js", ssr: false, mode: "client" },
  ],
  build: {
    transpile: ["vue-apexchart.js"],
  },
};
