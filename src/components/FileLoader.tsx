import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
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
			<Typography variant="h5">
				{dictionary
					? "Replace the Hex Dictionary:"
					: "Upload a Hex Dictionary:"}
			</Typography>

			<Input onChange={onChange} type="file" style={{ marginBottom: 8 * 3 }} />
		</div>
	);
};
