import { lazy, Suspense } from "react";

// const MfAngular14 = lazy(() => import("products/ProductsIndex"));
// const MfAngular17 = lazy(() => import("mfAngular17/Module"));
// const Products = lazy(() => import("products/ProductsIndex"));
const RemoteComponent = lazy(() => import("remoteApp/RemoteComponent"));
const Home = lazy(() => import("remoteApp/Home"));

function App() {
	return (
		<div>
			<h1>Contenedor Vite con Microfrontends de Angular</h1>
			{/* <Suspense fallback={<div>Cargando Angulars...</div>}>
				<MfAngular14 />
				<MfAngular17 />
			</Suspense> */}
			<Suspense fallback={<div>Cargando mf puro...</div>}>
				<RemoteComponent />
				<Home />
			</Suspense>
		</div>
	);
}

export default App;
