import { actionTypes, stateTypes } from './Types';
// loading, success, error
export const initialstate = {
    stores: {
        loading: false,
        data: null,
        error: null
    },
    store: {
        loading: false,
        data: null,
        error: null
    },
};
const loadingState = {
    loading: true,
    data: null,
    error: null
};
const success = (data: any) => ({
    loading: false,
    data,
    error: null
});
const error = (e: string | null) => ({
    loading: true,
    data: null,
    error: e
});

export function reducer(state: stateTypes, action: actionTypes) {
    switch (action.type) {
        case 'GET_STORES':
            return {
                ...state,
                stores: loadingState
            };
        case 'GET_STORES_SUCCESS':
            return {
                ...state,
                stores: success(action.data)
            };
        case 'GET_STORES_ERROR':
            return {
                ...state,
                stores: error(action.error)
            };
        case 'GET_STORE':
            return {
                ...state,
                store: loadingState
            };
        case 'GET_STORE_SUCCESS':
            return {
                ...state,
                store: success(action.data)
            };
        case 'GET_STORE_ERROR':
            return {
                ...state,
                store: error(action.error)
            };
        default:
            return state;
    }
}
