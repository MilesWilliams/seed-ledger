/**
 *
 * @param objects
 * @param key
 */
export function ToHashMap<T>(obj: any[], state: any, key: string): { [key: string]: T } {
    return obj.reduce(
        (entities: { [id: string]: any }, item: any) => {
            return {
                ...entities,
                [item[key]]: item,
            };
        },
        { ...state.entities }
    );

}

export function AddTimeSeries<T>(obj: any, state: any, key: string): { [key: string]: T } {
    let object = {};
    Object.keys(state).forEach(
        (k) => object[k] = state[k]
    )
    object[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];

    return object
}

/**
 *
 *
 * @export
 * @param {*} entities
 * @returns {any[]}
 */
export function FromHashMap<T>(entities): T[] {
    return Object.keys(entities).map(key => {
        if (key) return entities[key];
    });
}

/**
 *
 *
 * @export
 * @param {any[]} obj
 * @param {*} state
 * @param {string} key
 * @returns
 */
export function ToSortedHashMap<T>(obj: any[], state: any, key: string): { [key: string]: T } {
    return obj.reduce((r: any, a: any) => {
        if (a !== null) {
            r[a[key]] = r[a[key]] || [];
            r[a[key]].push(a);
        }
        return r;
    }, Object.create(null));
}

/**
 *
 * @export
 * @template T
 * @param {{[lang: string]: T[]}} dataSet
 * @returns {T[]}
 */
export function FlattenHashMapArrays<T>(dataSet: { [lang: string]: T[] }): T[] {
    const entities = FromHashMap<T[]>(dataSet);
    const flatArr = [];

    // joining arrays into 1
    entities.forEach(a => flatArr.push(...a));
    return flatArr;
}
