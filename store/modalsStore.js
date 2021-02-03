export const state = () => ({
  optionsModalToggle: false,
  regions: false,
  industry: false
});

export const mutations = {
  changeOptionsModalToggle(state) {
    state.optionsModalToggle = !state.optionsModalToggle;
  },
  regionOrIndustrySwitch(state, region, industry) {
    state.regions = region;
    state.industry = industry;
  }
};

export const actions = {
  // async fetchPosts({ commit }) {
  //   const posts = await this.$axios.$get(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //  }
  callChangeOptionsModalToggle({ commit }) {
    commit("changeOptionsModalToggle");
  },
  callChengeOnRegions({ commit }) {
    commit("regionOrIndustrySwitch", true, false);
  },
  callChengeOnIndustry({ commit }) {
    commit("regionOrIndustrySwitch", false, true);
  }
};

export const getters = {
  optionsModalToggle(state) {
    return state.optionsModalToggle;
  },
  isRegion(state) {
    return state.regions;
  },
  isIndustry(state) {
    return state.industry;
  }
};
