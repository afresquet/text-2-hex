import React, { useContext, useState } from "react";
import { HexDictionaryContext } from "../context/HexDictionary";

export const TextConverter: React.FC = () => {
	const { dictionary } = useContext(HexDictionaryContext);

	const [input, setInput] = useState("");

	return (
		<div>
			<textarea
				value={input}
				onChange={e => setInput(e.target.value)}
				disabled={!dictionary}
			/>

			<h3>HEX Codes:</h3>
			<p>
				{input
					.split("")
					.reduce(
						(previous, current, index) =>
							index === 0
								? dictionary?.get(current)!
								: previous + " " + dictionary?.get(current)!,
						""
					)}
			</p>

			<h3>PNATCH:</h3>
			<p>
				{input
					.split("")
					.reduce(
						(previous, current, index) =>
							index === 0
								? dictionary?.get(current)!
								: dictionary?.get(current)! + previous,
						""
					)}
			</p>
		</div>
	);
};
