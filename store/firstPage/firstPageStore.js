export const state = () => ({
  informModal: false,
  invest_posts: [],
  team_posts: [],
  toggleMode: false,
  current_post: [],
  errors: ""
});

export const mutations = {
  CANGE_MOBILE_MODAL(state) {
    state.mobileModal = !state.mobileModal;
  },
  CHANGE_TOGGLE_MODE(state) {
    state.toggleMode = !state.toggleMode;
  },
  SET_INVEST_POSTS(state, data) {
    state.invest_posts = data;
  },
  SET_TEAM_POSTS(state, data) {
    state.team_posts = data;
  },
  SET_CURRENT_POST(state, data) {
    state.current_post = data;
  },
  SET_ERRORS(state, data) {
    state.errors = data;
  }
};

export const actions = {
  callChangeMobileModal({ commit }) {
    commit("CANGE_MOBILE_MODAL");
  },
  async fetchInvestPosts({ commit }) {
    const invest_posts = await this.$axios.$get("main_invest");
    commit("SET_INVEST_POSTS", invest_posts.response);
  },
  async fetchTeamPosts({ commit }) {
    const invest_posts = await this.$axios.$get("main_team");
    commit("SET_TEAM_POSTS", invest_posts.response);
  },
  async fetchOneInvestPost({ commit }, post_id) {
    const current_post = await this.$axios.$post("invest_item", {
      id: post_id
    });
    commit("SET_CURRENT_POST", current_post);
  },
  async fetchOneTeamPost({ commit }, post_id) {
    const current_post = await this.$axios.$post("team_item", {
      id: post_id
    });
    commit("SET_CURRENT_POST", current_post);
  },
  callChangeToggleMode({ commit }) {
    commit("CHANGE_TOGGLE_MODE");
  }
};

export const getters = {
  getMobileModal(state) {
    return state.mobileModal;
  },
  getToggleMode(state) {
    return state.toggleMode;
  },
  getInvestPosts(state) {
    return state.invest_posts;
  },
  getTeamPosts(state) {
    return state.team_posts;
  },
  getCurrentPost(state) {
    return state.current_post;
  },
  getErrors(state) {
    return state.errors;
  }
};
