export const state = () => ({
    accessToken: null,
    refreshToken: null,
    user: null,
})

export const getters = {
    getAccessToken(state) {
        return state.accessToken
    },
    getRefreshToken(state) {
        return state.refreshToken
    },
    getUser(state) {
        return state.user
    }
}

export const mutations = {
    updateAccessToken: (state, payload) => {
        state.accessToken = payload
    },
    updateRefreshToken: (state, payload) => {
        state.refreshToken = payload
    },
    updateUser: (state, payload) => {
        state.user = payload

    },
    logout: (state, payload) => {
        state.accessToken = null
        state.refreshToken = null
        state.user = null
    }

}

export const actions = {
    updateAccessToken({ commit: { payload } }) {
        commit('updateAccessToken', payload)
    },
    updateRefreshToken({ commit: { payload } }) {
        commit('updateRefreshToken', payload)
    },
    updateUser({ commit: { payload } }) {
        commit('updateUser', payload)
    },

    logout({ commit: { payload } }) {
        commit('logout', payload)
    },
}