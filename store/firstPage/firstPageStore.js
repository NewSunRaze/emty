export const state = () => ({
  toggleMode: false
});

export const mutations = {
  changeToggleMode(state) {
    state.toggleMode = !state.toggleMode;
  }
};

export const actions = {
  // async fetchPosts({ commit }) {
  //   const posts = await this.$axios.$get(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //  }
  callChangeToggleMode({ commit }) {
    commit("changeToggleMode");
  }
};

export const getters = {
  changeToggleMode(state) {
    return state.toggleMode;
  }
};
