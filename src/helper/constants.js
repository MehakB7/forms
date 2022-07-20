export const navigation = {
  "/": {
    name: "Home",
    routes: [
      { path: "/withHooks", name: "With Hooks" },
      { path: "/withComponents", name: "With Components" },
    ],
  },
  "/withHooks": {
    name: "With Hooks",
    routes: [
      { path: "/withHooks/signUp", name: "Sign Up" },
      { path: "/withHooks/appointment", name: "Appointment" },
      { path: "/withHooks/someTool", name: "Some tools" },
    ],
  },

  "/withComponents": {
    name: "With Components",
    routes: [
      { path: "/withComponents/signUp", name: "Sign Up" },
      { path: "/withComponents/shipping", name: "Shipping Form" },
      { path: "/someTool", name: "Some tools" },
    ],
  },
};

export const cities = [
  {
    value: "Mohali",
    label: "Mohali",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Shimla",
    label: "Shimla",
  },
  {
    value: "Pune",
    label: "Pune",
  },
];

export const state = [
  {
    value: "Chandigath",
    label: "Chandigath",
  },
  {
    value: "Punjab",
    label: "Punjab",
  },
  {
    value: "Himachal Pardesh",
    label: "Himachal Pardesh",
  },
];
