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
  industry: false,
  currentService: ''
});

export const mutations = {
  SET_CURRENT_SERVICE(state, params){
    state.currentService = params;
  },
  CANGE_MOBILE_MODAL(state) {
    state.mobileModal = !state.mobileModal;
  },
  CANGE_INFORM_MODAL(state, params) {
    state.informModal = params;
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
  callChangeCurrentService({commit}, params){
    commit("SET_CURRENT_SERVICE", params);
  },
  callChangeMobileModal({ commit }) {
    commit("CANGE_MOBILE_MODAL");
  },
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
  getCurrentService(state){
    return state.currentService
  },
  getMobileModal(state) {
    return state.mobileModal;
  },
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
