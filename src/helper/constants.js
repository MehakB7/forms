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
      { path: "/withHooks/webinarForm", name: "Webinar Form" },
      { path: "/withHooks/someTool", name: "Some tools" },
    ],
  },

  withComponent: {
    name: "With Components",
    routes: [
      { path: "/signUp", name: "Sign Up" },
      { path: "/webinarForm", name: "Webinar Form" },
      { path: "/someTool", name: "Some tools" },
    ],
  },
};
