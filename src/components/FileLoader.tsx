import React, { useCallback, useContext } from "react";
import { HexDictionaryContext } from "../context/HexDictionary";

export const FileLoader: React.FC = () => {
	const { dictionary, setDictionary } = useContext(HexDictionaryContext);

	const onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.item(0);

			if (!file) return;

			const reader = new FileReader();

			reader.readAsText(file, "utf-8");

			reader.onload = ev => {
				if (!ev.target?.result) return;

				const json = JSON.parse(ev.target.result as string) as {
					[key: string]: string;
				};

				const map = new Map<string, string>();

				for (const [key, value] of Object.entries(json)) {
					map.set(key, value);
				}

				setDictionary(map);
			};

			reader.onerror = ev => {
				console.error(ev);
			};
		},
		[setDictionary]
	);

	return (
		<div>
			<h3>File loader</h3>
			<p>Dictionary in memory: {dictionary ? "Yes" : "No"}</p>
			<input onChange={onChange} type="file" />
		</div>
	);
};
