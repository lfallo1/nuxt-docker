import axios from 'axios';

export const state = () => ({
  users: [],
  selectedUser: {}
})

export const mutations = {
  setUsers (state, users) {
    state.users = users;
  },
  setSelectedUser(state, user){
    state.selectedUser = user;
  }
}

export const actions = {
  async findAllUsers({commit}){
    const users = await axios.get('http://localhost:8080/api/user');
    commit('setUsers', users.data);
  },
  async findByUsername({commit}, username){
    const user = await axios.get(`http://localhost:8080/api/user/${username}`);
    commit('setSelectedUser', user.data);
  }
}
