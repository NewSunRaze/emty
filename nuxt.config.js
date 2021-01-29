export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    lang: "ru",
    title: "my-nuxt-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/static/style.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link"
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "bootstrap-vue/nuxt", "@nuxtjs/auth-next"],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: false
          },
          logout: {
            url: "/auth/logout",
            method: "post"
          },
          user: {
            url: "/auth/profile",
            method: "get",
            propertyName: false
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },
  axios: {
    baseURL: "http://localhost:8080/",
    credentials: false
  },
  build: {}
};
