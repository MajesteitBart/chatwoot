import Vue from 'vue';
import Vuex from 'vuex';
import appConfig from 'widget/store/modules/appConfig';
import contact from 'widget/store/modules/contact';
import conversation from 'widget/store/modules/conversation';
import mautic from 'widget/store/modules/mautic';
import agent from 'widget/store/modules/agent';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appConfig,
    contact,
    conversation,
    agent,
    mautic,
  },
});
