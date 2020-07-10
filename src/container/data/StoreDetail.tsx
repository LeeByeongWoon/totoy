import React, { useEffect } from 'react';
import { useStoresState, useStoresDispatch, Store } from 'lib/useAsync';

function StoreDetail({ id }: { id: number }) {
    const state = useStoresState();
    const dispatch = useStoresDispatch();

    const { loading, data, error } = state.store;

    useEffect(() => {
        Store(dispatch, id);
    }, [dispatch, id])

    if (loading) return <div>loading</div>
    if (error) return <div>에러 발생</div>;
    if (!data) return null
    return (
        <div>
            <h2>{data.name}</h2>
            <ul>
                <li><b>Id:</b> {data.id} </li>
                <li><b>Name:</b> {data.name}</li>
                <li><b>Address:</b> {data.address} </li>
                <li><b>inforamtion:</b> {data.information} </li>
                <li><b>menuItems:</b> {data.menuitems ? data.menuitems : "null"} </li>
            </ul>
        </div>
    )
}

export default StoreDetail;