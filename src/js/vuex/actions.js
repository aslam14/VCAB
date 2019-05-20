const actions = {
  setNavigationStatus({ commit }, show) {
    commit("SET_NAVIGATION_STATUS", show);
  }
};

export default {
  setNavigationStatus: actions.setNavigationStatus
};
