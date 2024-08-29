import { lazy, Suspense } from "react";

const MfAngular17 = lazy(() => import("mfAngular17/Login"));

function App() {
	return (
		<div>
			<h1>Contenedor Vite con Microfrontends de Angular</h1>
			<Suspense fallback={<div>Cargando Angular 17...</div>}>
				<MfAngular17 />
			</Suspense>
		</div>
	);
}

export default App;
