import { actionTypes, stateTypes } from './Types';
import React, { useReducer, createContext, useContext } from 'react';
import { getStore, getStores } from './api';
import { reducer, initialstate } from './reducer';
const StoresStateContext = createContext<null | stateTypes>(null);
const StoresDispatchContext = createContext<any>(null);

export function StoresProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <StoresStateContext.Provider value={state}>
            <StoresDispatchContext.Provider value={dispatch}>
                {children}
            </StoresDispatchContext.Provider>
        </StoresStateContext.Provider>
    )
}
export function useStoresState() {
    const state = useContext(StoresStateContext);
    if (!state) {
        throw new Error("Cannot find UserStateProvider");
    }
    return state;
}
export function useStoresDispatch() {
    const dispatch = useContext(StoresDispatchContext);
    if (!dispatch) {
        throw new Error("Cannot find UserStateProvider");
    }
    return dispatch;
}

export async function Store(dispatch: React.Dispatch<actionTypes>, id: number) {
    dispatch({ type: 'GET_STORE' });
    try {
        const data = await getStore(id);
        dispatch({
            type: 'GET_STORE_SUCCESS',
            data: data
        });
    } catch (e) {
        dispatch({
            type: "GET_STORE_ERROR",
            error: e
        });
    }
}
export async function Stores(dispatch: React.Dispatch<actionTypes>) {
    dispatch({ type: 'GET_STORES' });
    try {
        const data = await getStores();
        dispatch({
            type: 'GET_STORES_SUCCESS',
            data: data
        });
    } catch (e) {
        dispatch({
            type: "GET_STORES_ERROR",
            error: e
        });
    }
}
