import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      username: "devtest+automation@lovevery.com",
      password: "test@1234"
    }
  },
});
