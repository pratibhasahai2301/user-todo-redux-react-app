import Users from '../views/components/users';
import Home from '../views/components/home';
import UserDetails from '../views/components/userDetails';
import Todos from '../views/components/todos';

const routes = [
  {
    path: "/users",
    component: Users,
    exact: true,
  },
  {
    path: "/users/:userId",
    component: UserDetails,
    exact: true,
  },
  {
    path: "/todos/:userId",
    component: Todos,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  }
];

export default routes;
