const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'cleanArch',

  exposes: {
    "./MainComponent": "./projects/clean-architecture/src/app/main/main.component.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", }),
  },

  sharedMappings: ["@commons-lib"],
});

