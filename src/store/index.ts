import TokenStore from "./TokenStore";
import UsersStore from "./UsersStore";
import UserStore from "./UserStore";

const store = {
    tokenStore: new TokenStore(),
    usersStore: new UsersStore(),
    userStore: new UserStore(),
}

export default store;
