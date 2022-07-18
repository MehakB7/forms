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
      { path: "/webinarForm", name: "Webinar Form" },
      { path: "/someTool", name: "Some tools" },
    ],
  },
};
