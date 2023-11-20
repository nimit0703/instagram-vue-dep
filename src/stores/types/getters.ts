import _ from "lodash";
import Post from "../../classes/Post";
import state from "./state";
import store from "../store";
import User from "../../classes/User";

const getters = {
  getHighlightsByUId: (state: any) => (id: number) => {
    const user: User = _.find(state.users, (user) => user.uid === id);
    console.log("user: getHighlight", user);
    return user.highlights;
  },
  getPostsByFollowing: (state: any) => {
    const followingIds = state.thisUser.following;
    const posts = _.filter(state.posts, (post) =>
      followingIds.includes(post.belongsTo)
    );
    return posts;
  },
  getUserById: (state: any) => (id: number) => {
    const user = _.find(state.users, (user) => user.uid == id);
    console.log("getUserById", user, id);
    return user;
  },
  getPostById: (state: any) => (id: number) => {
    return _.find(state.posts, (post) => post.id === id);
  },
  getUsersHavingStories: (state: any) => () => {
    const usersHavingStories = _.filter(state.users, (user) => user.hasStories);
    console.log(
      "_____________________________________________________________________"
    );
    console.log("allusers", usersHavingStories);
    const currentUserIndex = _.findIndex(
      usersHavingStories,
      (user) => user.uid === state.thisUser.uid
    );
    if (currentUserIndex !== -1) {
      usersHavingStories.splice(currentUserIndex, 1);
    }
    console.log("allusers without thisUSer", usersHavingStories);
    console.log(
      "_____________________________________________________________________"
    );

    return usersHavingStories;
  },

  getMypost: (state: any) => () => {
    return _.filter(
      state.posts,
      (post: Post) => post.belongsTo === state.thisUser.uid
    );
  },
  getPostsById: (state: any) => (id: number) => {
    return _.filter(state.posts, (post: Post) => post.belongsTo === id);
  },
  getStoriesFromUserId: (state: any) => (id: number) => {
    const user: User = store.getters.getUserById(id);
    return user.stories;
  },
  getMyFollowing: (state: any) => () => {
    const followingIdList: number[] = state.thisUser.following;
    const followings: User[] = [];
    for (let i of followingIdList) {
      const following = store.getters.getUserById(i);
      followings.push(following);
    }
    console.log(followings);

    return followings;
  },
  smallNavGetter:(state:any)=>()=>{
    return state.smallNav;
  },
  getIsChatOpen:(state:any)=>()=>{
    return state.isChatOpen;
  },
  getChatData:(state:any)=>()=>{
    return state.chatData;
  }
};

// comment added

export default getters;
