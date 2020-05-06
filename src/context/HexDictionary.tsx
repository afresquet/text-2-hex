import React, { useCallback, useEffect, useState } from "react";
import { dictionaryPath } from "../constants/dictionaryPath";

type DictionaryMap = Map<string, string>;

interface Context {
	dictionary: DictionaryMap | undefined;
	setDictionary: (map: DictionaryMap) => void;
}

export const HexDictionaryContext = React.createContext<Context>({} as any);

export const HexDictionaryProvider: React.FC = ({ children }) => {
	const [dictionary, setDictionary] = useState<DictionaryMap>();

	useEffect(() => {
		const string = localStorage.getItem(dictionaryPath);

		if (!string) return;

		const parsedDictionary = new Map(JSON.parse(string)) as DictionaryMap;

		setDictionary(parsedDictionary);
	}, []);

	const setInLocalStorage = useCallback((map: DictionaryMap) => {
		const string = JSON.stringify(Array.from(map.entries()));

		localStorage.setItem(dictionaryPath, string);

		setDictionary(map);
	}, []);

	return (
		<HexDictionaryContext.Provider
			value={{ dictionary, setDictionary: setInLocalStorage }}
		>
			{children}
		</HexDictionaryContext.Provider>
	);
};
