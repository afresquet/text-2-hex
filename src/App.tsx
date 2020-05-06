import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { FileLoader } from "./components/FileLoader";
import { TextConverter } from "./components/TextConverter";

function App() {
	return (
		<Container>
			<Typography variant="h1" align="center">
				Text 2 Hex
			</Typography>
			<Typography align="center">
				Created by <a href="https://github.com/afresquet">afresquet</a>
			</Typography>

			<FileLoader />

			<TextConverter />
		</Container>
	);
}

export default App;
