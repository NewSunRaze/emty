export const state = () => ({
  toggleMode: "invest"
});

export const mutations = {
  setMode(state, toggleMode) {
    state.toggleMode = toggleMode;
  }
};

export const actions = {
  // async fetchPosts({ commit }) {
  //   const posts = await this.$axios.$get(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //  }
  test({ commit }) {
    const toggleMode = false;
    commit("setMode", toggleMode);
  }
};

export const getters = {
  changeToggleMode(state) {
    return state.posts;
  }
};
