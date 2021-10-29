const typeCache: { [label: string]: boolean } = {};

/**
 * @export
 * @description Helper function to check if action type is unique.
 * @template T
 * @param {(T | '')} label
 * @returns {T}
 */
export function Type<T>(label: T | ''): T {
	if (typeCache[<string>label]) {
		throw new Error(`Action type "${label}" is not unique"`);
	}

	typeCache[<string>label] = true;

	return <T>label;
}
