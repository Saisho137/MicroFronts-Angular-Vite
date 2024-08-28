import { Configuration, container } from "webpack";
const { ModuleFederationPlugin } = container;

const config: Configuration = {
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				mfAngular14: "mfAngular14@http://localhost:4201/remoteEntry.js",
				mfAngular17: "mfAngular17@http://localhost:4202/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
};

export default config;
