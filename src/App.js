import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
	const store = useStore();

	return (
		<>
			<GlobalStyle />
			<main className="App">
				<Header />

				{/* TODO: Blog things goes here. Use the components folder! */}
				<Container>
					<h1>Blog</h1>
					<Body />
				</Container>

				<Footer />
			</main>
		</>
	);
}

export default App;
