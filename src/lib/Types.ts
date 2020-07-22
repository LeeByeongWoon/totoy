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
        error: Error | null;
    },
    store: {
        loading: boolean;
        data: null | storeDataType;
        error: Error | null;
    },
    postRequst: {
        loading: boolean;
        data: string | null;
        error: Error | null;
    }
}

export type actionTypes =
    | { type: 'GET_STORES' }
    | { type: 'GET_STORE' }
    | { type: 'POST_STORE' }
    | { type: 'GET_STORES_SUCCESS', data: storeDataType[] }
    | { type: 'GET_STORES_ERROR', error: string | null }
    | { type: 'GET_STORE_SUCCESS', data: storeDataType }
    | { type: 'GET_STORE_ERROR', error: string | null }
    | { type: 'POST_STORE_SUCCESS', data: string | null }
    | { type: 'POST_STORE_ERROR', error: Error | null }
