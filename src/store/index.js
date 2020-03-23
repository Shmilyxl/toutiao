import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import search from './search'
import scroll from './scroll'
export default new Vuex.Store({
    state: {

    },
    mutations: {},
    actions: {},
    modules: {
        search,
        scroll
    }
})