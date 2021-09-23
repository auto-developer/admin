import TokenStore from "./TokenStore";
import UsersStore from "./UsersStore";
import UserStore from "./UserStore";
import ClientStore from "./ClientStore";

const store = {
    tokenStore: new TokenStore(),
    usersStore: new UsersStore(),
    clientStore: new ClientStore(),
    userStore: new UserStore(),
}

export default store;
