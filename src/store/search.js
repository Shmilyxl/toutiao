import store from 'store'

let { id, nm } = store.get('currentitem')
const state = {
    itid: id,
    nm
}

const mutations = {
    setItem(state, { id, nm }) {
        state.itid = id
        state.nm = nm
    }
}

const actions = {
    saveItem({ commit }, payload) {
        commit('setItem', payload)
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}