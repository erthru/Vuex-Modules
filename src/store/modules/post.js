export default {
  namespaced: true,

  state: {
    posts: [],
    post: {},
  },

  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    },

    SET_POST(state, data) {
      state.post = data;
    },
  },

  actions: {
    fetchPosts({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          commit("SET_POSTS", data);
        })
        .catch((error) => {
          console.error("fetchPost() error: " + error);
        });
    },

    fetchPost({ commit }, { id }) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((res) => res.json())
        .then((data) => {
          commit("SET_POST", data);
        })
        .catch((error) => {
          console.error("fetchPosts() error: " + error);
        });
    },
  },
};
