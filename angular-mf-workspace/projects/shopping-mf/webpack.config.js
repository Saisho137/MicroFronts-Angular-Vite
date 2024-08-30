const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shoppingMf',

  exposes: {
    "./ProductsModule": "./projects/shopping-mf/src/app/products/products.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", }),
  },

  sharedMappings: ["@commons-lib"],
});
