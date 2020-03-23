const state = {
    position: 0,
}

const mutations = {
    setPosition(state, action) {
        state.position = action.position
    }

}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}