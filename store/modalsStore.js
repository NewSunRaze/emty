export const state = () => ({
  informModal: {
    show: false,
    params: {
      decription: "",
      firstBtn: "",
      secondBtn: ""
    }
  },
  mobileModal: false,
  optionsModalToggle: false,
  regions: false,
  industry: false
});

export const mutations = {
  CANGE_INFORM_MODAL(state, params) {
    state.informModal.show = !state.informModal.show;
    state.informModal.params = params;
  },
  changeOptionsModalToggle(state) {
    state.optionsModalToggle = !state.optionsModalToggle;
  },
  regionOrIndustrySwitch(state, region, industry) {
    state.regions = region;
    state.industry = industry;
  }
};

export const actions = {
  callChangeInformModal({ commit }, params) {
    commit("CANGE_INFORM_MODAL", params);
  },
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
  getInformModal(state) {
    return state.informModal;
  },
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
