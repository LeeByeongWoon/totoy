export type storeDataType = {
    id: number,
    name: string,
    address: string,
    information: string,
    menuitems?: {
        id: number,
        name: string
    }
}
export type stateTypes = {
    stores: {
        loading: boolean;
        data: null | storeDataType[];
        error: null | string;
    },
    store: {
        loading: boolean;
        data: null | storeDataType;
        error: null | string;
    },
}

export type actionTypes =
    | { type: 'GET_STORES' }
    | { type: 'GET_STORES_SUCCESS', data: storeDataType[] }
    | { type: 'GET_STORES_ERROR', error: string | null }
    | { type: 'GET_STORE' }
    | { type: 'GET_STORE_SUCCESS', data: storeDataType }
    | { type: 'GET_STORE_ERROR', error: string | null }
