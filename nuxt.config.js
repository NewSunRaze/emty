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
    redirect: {
      login: "/auth/login",
      logout: "/",
      home: "/"
    },
    strategies: {
      local: {
        token: {
          property: "token",
          // required: true,
          type: "Bearer"
        },
        user: {
          property: ""
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/profile/logout", method: "post" },
          user: { url: "/get_profile", method: "get" }
        }
      }
    }
  },
  server: {
    port: 8080
  },
  axios: {
    baseURL: "http://5.63.157.3/"
  },
  router: {},
  build: {}
};
