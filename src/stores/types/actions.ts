import { Commit } from "vuex";

const actions = {
    async fetchUserData({ commit }: { commit: Commit }){
        try {
          const response = await fetch("src/stores/data/users.json");
          const data = await response.json();
          commit("setUsers", data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      },
    async fetchPostData({ commit }: { commit: Commit }){
        try {
          const response = await fetch("src/stores/data/posts.json");
          const data = await response.json();
          commit("setPosts", data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      },
};

export default actions;