var getters = {
  getNavigationStatus: function(state) {
    return state.showNavigation;
  },

  getNavigationItems: function(state) {
    return state.items;
  }
};

export default {
  getNavigationStatus: getters.getNavigationStatus,
  getNavigationItems: getters.getNavigationItems
};
