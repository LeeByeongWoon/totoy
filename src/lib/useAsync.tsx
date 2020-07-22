import { actionTypes, stateTypes } from './Types';
import React, { useReducer, createContext, useContext } from 'react';
import { getStore, getStores, postStore } from './api';
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
        setTimeout(() =>
            dispatch({
                type: 'GET_STORES_SUCCESS',
                data: data
            }), 1000);

    } catch (e) {
        setTimeout(() =>
            dispatch({
                type: "GET_STORES_ERROR",
                error: e
            }), 1000);
    }
}

export async function addStore(
    dispatch: React.Dispatch<actionTypes>, name: string, address: string) {
    dispatch({ type: "POST_STORE" });
    try {
        const data = await postStore(name, address);
        setTimeout(() => dispatch({
            type: 'POST_STORE_SUCCESS',
            data
        }), 1500)

    } catch (e) {
        dispatch({
            type: "POST_STORE_ERROR",
            error: e
        });
    }
}
