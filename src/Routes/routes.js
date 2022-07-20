import { Menu } from "../layout/Menu";
import { Signup } from "../forms/withHook/Singup";
import { Appointment } from "../forms/withHook/Appointment";
import SignUpComp from "../forms/withComponent/SignUpComp";
import { AddressForm } from "../forms/withComponent/Address";
import { ShippingFrom } from "../forms/withComponent/ShippingFrom";

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
  {
    path: "/withHooks/appointment",
    element: <Appointment />,
  },
  {
    path: "/withComponents/signUp",
    element: <SignUpComp />,
  },
  {
    path: "/withComponents/shipping",
    element: <ShippingFrom />,
  },
];
