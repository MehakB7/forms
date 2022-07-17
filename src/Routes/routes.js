import { Menu } from "../layout/Menu";
import { Signup } from "../forms/withHook/Singup";

export const routes = [
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/withHooks",
    element: <Menu />,
  },
  { path: "/withComponents", element: <Menu /> },
  {
    path: "/withHooks/signUp",
    element: <Signup />,
  },
];
