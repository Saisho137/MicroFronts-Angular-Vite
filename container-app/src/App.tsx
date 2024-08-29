import { lazy, Suspense } from "react";

const MfAngular14 = lazy(() => import("mf_angular14/Module"));
const MfAngular17 = lazy(() => import("mfAngular17/Module"));

function App() {
	return (
		<div>
			<h1>Contenedor Vite con Microfrontends de Angular</h1>
			<Suspense fallback={<div>Cargando Angular 14...</div>}>
				<MfAngular14 />
			</Suspense>
			<Suspense fallback={<div>Cargando Angular 17...</div>}>
				<MfAngular17 />
			</Suspense>
		</div>
	);
}

export default App;
