import TokenStore from "./TokenStore";
import UserStore from "./UserStore";

const store = {
    tokenStore: new TokenStore(),
    userStore: new UserStore(),
}

export default store;
