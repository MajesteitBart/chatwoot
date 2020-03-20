import { updateContact } from 'widget/api/contact';

const state = {
  uiFlags: {
    isUpdating: false,
  },
};

const getters = {
  getUIFlags: $state => $state.uiFlags,
};

const actions = {
  updateContactAttributes: async ({ commit }, { email, messageId }) => {
    commit('toggleUpdateStatus', true);
    try {
      await updateContact({ email, messageId });
     	mt(
        'send', 'pageview', 
        {
          email: email 
        }
      );
    } catch (error) {
      // Ignore error
    },
};