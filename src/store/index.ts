import TokenStore from "./TokenStore";
import UserStore from "./UserStore";
import AdminStore from "./AdminStore";

const store = {
    tokenStore: new TokenStore(),
    userStore: new UserStore(),
    adminStore: new AdminStore(),
}

export default store;
