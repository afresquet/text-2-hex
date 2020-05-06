import React from "react";
import { FileLoader } from "./components/FileLoader";
import { TextConverter } from "./components/TextConverter";

function App() {
	return (
		<div>
			<h1>Text 2 Hex</h1>
			<FileLoader />
			<TextConverter />
		</div>
	);
}

export default App;
