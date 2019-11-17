import client from "@/api/client";
import _ from "lodash";

const state = {
  clients: [],
  client: {},
  clientSearch: "",
  clientPage: ""
};

const getters = {
  getClients: state => state.clients,
  getClient: state => state.client,
  getClientSearch: state => state.clientSearch,
  getClientPage: state => state.clientPage,
  isClientEmpty: state => _.isEmpty(state.client)
};

const mutations = {
  LOAD_CLIENTS(state, clients) {
    state.clients = clients;
  },

  LOAD_CLIENT(state, client) {
    state.client = client;
  },

  CLEAR_CLIENT(state) {
    state.client = {};
  },

  SET_CLIENT_SEARCH(state, search) {
    state.clientSearch = search;
  },

  CLEAR_CLIENT_SEARCH(state) {
    state.clientSearch = "";
  },

  SET_CLIENT_PAGE(state, page) {
    state.page = page;
  }
};

const actions = {
  loadClients({ commit }) {
    commit("LOAD_CLIENTS", client.getClients());
  },

  loadClient({ commit }, id) {
    commit("LOAD_CLIENT", client.getClient(id));
  }
};

export default { state, getters, actions, mutations };
