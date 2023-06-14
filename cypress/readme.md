# Cypress, VsCode extensions and Cucumber pre-processor installation and configuration

# Cypress installation and configuration

To install cypress follow _[Cypress - installing cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)_ or perform command below

```sh
npm install cypress --save-dev
```

Install npx package to executes  either from a local node_modules/.bin

```sh
npm install -g npx
```

Create and configure tsconfig.json file inside your cypress folder

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}

```

# VsCode extensions

_[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)_ - Material Design Icons for Visual Studio Code

_[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)_ - Code formatter

To add prettier as default formatter add this code to the settings.json

`"editor.defaultFormatter": "esbenp.prettier-vscode"`

_[Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)_

# Cucumber setup

To install cucumber dependencies follow _[@badeball/cypress-cucumber-preprocesor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor)_ or execute command below

```sh
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

According to the _[quick-start.md](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md#example-setup)_ Replace content of the cypress.config.ts file by code below

```ts
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});

```

Install missing dependencies

```sh
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
```

Fix import error for `@badeball/cypress-cucumber-preprocessor/esbuild` add to tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@badeball/cypress-cucumber-preprocessor/*": ["./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"]
    }
  }
}

```