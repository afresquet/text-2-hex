import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import copy from "copy-to-clipboard";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { HexDictionaryContext } from "../context/HexDictionary";

export const TextConverter: React.FC = () => {
	const { dictionary } = useContext(HexDictionaryContext);

	const [input, setInput] = useState("");
	const [hex, setHex] = useState("");
	const [pnatch, setPnatch] = useState("");

	useEffect(() => {
		setHex(
			input
				.split("")
				.reduce(
					(previous, current, index) =>
						index === 0
							? dictionary?.get(current)!
							: previous + " " + dictionary?.get(current)!,
					""
				)
		);
	}, [dictionary, input]);

	useEffect(() => {
		setPnatch(
			input
				.split("")
				.reduce(
					(previous, current, index) =>
						index === 0
							? dictionary?.get(current)!
							: dictionary?.get(current)! + previous,
					""
				)
		);
	}, [dictionary, input]);

	const copyToClipboard = useCallback((value: string) => {
		copy(value);
	}, []);

	return (
		<div>
			{dictionary && (
				<>
					<TextField
						value={input}
						onChange={e => setInput(e.target.value)}
						disabled={!dictionary}
						variant="outlined"
						multiline
						fullWidth
						placeholder="Enter text here..."
						style={{ marginBottom: 8 * 3 }}
					/>

					{input && (
						<>
							<Typography variant="h5">HEX Codes:</Typography>
							<span onClick={() => copyToClipboard(hex)}>
								<Typography>{hex}</Typography>
							</span>

							<Typography variant="h5">PNATCH:</Typography>
							<span onClick={() => copyToClipboard(pnatch)}>
								<Typography style={{ wordWrap: "break-word" }}>
									{pnatch}
								</Typography>
							</span>
						</>
					)}
				</>
			)}
		</div>
	);
};
