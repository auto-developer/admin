import TokenStore from "./TokenStore";
import UsersStore from "./UsersStore";
import UserStore from "./UserStore";
import ClientStore from "./ClientStore";
import ClientsStore from "./ClientsStore";

const store = {
    tokenStore: new TokenStore(),
    usersStore: new UsersStore(),
    clientsStore: new ClientsStore(),
    clientStore: new ClientStore(),
    userStore: new UserStore(),
}

export default store;
