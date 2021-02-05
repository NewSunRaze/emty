export const state = () => ({
  invest_posts: [],
  team_posts: [],
  toggleMode: false,
  errors: ""
});

export const mutations = {
  changeToggleMode(state) {
    state.toggleMode = !state.toggleMode;
  },
  SET_INVEST_POSTS(state, data) {
    state.invest_posts = data;
  },
  SET_TEAM_POSTS(state, data) {
    state.team_posts = data;
  },
  SET_ERRORS(state, data) {
    state.errors = data;
  }
};

export const actions = {
  async fetchInvestPosts({ commit }) {
    const invest_posts = await this.$axios.$get("main_invest");
    commit("SET_INVEST_POSTS", invest_posts.response);
  },
  async fetchTeamPosts({ commit }) {
    const invest_posts = await this.$axios.$get("main_team");
    commit("SET_TEAM_POSTS", invest_posts.response);
  },
  callChangeToggleMode({ commit }) {
    commit("changeToggleMode");
  }
};

export const getters = {
  changeToggleMode(state) {
    return state.toggleMode;
  },
  getInvestPosts(state) {
    return state.invest_posts;
  },
  getTeamPosts(state) {
    return state.team_posts;
  },
  getErrors(state) {
    return state.errors;
  }
};
