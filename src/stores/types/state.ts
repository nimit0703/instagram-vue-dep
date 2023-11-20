import Highlight from "../../classes/Highlight";
import Post from "../../classes/Post";
import Story from "../../classes/Story";
import User from "../../classes/User";

const user = new User(
  1,
  "Nimit Trevadiya",
  "dark",
  "nimit@insta.com",
  "ab",
  "https://picsum.photos/id/1/1080",
  [26, 27, 28, 29, 30, 31, 32, 33, 34],
  [2, 3, 4, 26, 30, 31, 32, 33, 34],
  true,
  []
);
const s1 = new Story(1001, 1, "https://picsum.photos/id/51/1080");
const s2 = new Story(1002, 1, "https://picsum.photos/id/5/1080");
const s3 = new Story(1003, 1, "https://picsum.photos/id/55/1080");
user.addNewHighlight(new Highlight(1, 1, "Glimps Of 2k22", [s1, s2, s3]));
user.addNewHighlight(new Highlight(2, 1, "Glimps.. Of 2k23", [s3, s1, s2, s1]));
const state = {
  showLoder: false,
  thisUser: user,
  users: [],
  smallNav:false,
  posts: [],
  isChatOpen:false,
  chatData:{} as any,
};
// comment added

export default state;
