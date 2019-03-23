import Vue from 'vue';
import Vuex from 'vuex';
import _find from 'lodash.find';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: {},
    favourites: [],
  },
  getters: {
    dogs: (state) => {
      return state.dogs;
    },
    favourites: state => state.favourites,
    isImageFavourite: state => (image) => {
      return typeof _find(state.favourites, favourite => favourite.image === image) !== 'undefined';
    },
  },
  mutations: {
    favourite(state, payload) {
      // check this again to stop duplicates in case
      // this mutation is used outside of intended logic
      if (!this.getters.isImageFavourite(payload.image)) {
        // add it to our favourites
        state.favourites.push(payload);
      }
    },
    removeFavourite(state, payload) {
      // check this again to stop duplicates in case
      // this mutation is used outside of intended logic
      if (this.getters.isImageFavourite(payload.image)) {
        // remove from our favourites
        state.favourites.splice(
          state.favourites.findIndex(favourite => favourite.image === payload.image),
          1,
        );
      }
    },
    storeDogs(state, dogs) {
      state.dogs = dogs;
    },
  },
  actions: {
    // decided to let the store choose whether or not the
    // clicked image should be favourites or not.
    // putting all the logic in one place feels clean
    favouriteAction({commit}, payload) {
      if (!this.getters.isImageFavourite(payload.image)) {
        commit('favourite', payload);
      } else {
        commit('removeFavourite', payload);
      }
    },
    fetchDogs() {
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then((dogs) => {
          this.commit('storeDogs', dogs.data.message);
        })
        .catch((error) => {
          this.$logger.error(error);
        });
    },
  },
});
