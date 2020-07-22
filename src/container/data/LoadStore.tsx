import React, { useState } from 'react';
import { useStoresState, useStoresDispatch, Stores } from 'lib/useAsync';
import StoreDetail from './StoreDetail';
import LoadingForm from 'components/LoadingForm';


function LoadStore() {
    const [userId, setUserId] = useState<null | number>(null);
    const state = useStoresState();
    const dispatch = useStoresDispatch();

    const { loading, data, error } = state.stores;

    const fetchData = () => {
        Stores(dispatch);
        setUserId(null);
    }
    if (loading) return <LoadingForm />
    if (error) return (
        <div>
            <p>에러가 발생 했습니다.{(error.message)}</p>
            <button onClick={fetchData}>Load</button>
        </div>);
    if (!data) return <button onClick={fetchData}>Load</button>;
    if (data.length === 0) return (
        <div>
            <p>empty</p>
            <button onClick={fetchData}>Load</button>
        </div>)
    return (
        <div>
            <ul>
                {data.map(data => <li key={data.id} onClick={() => setUserId(data.id)}>
                    {data.name} ({data.address}) ({data.menuitems ? data.menuitems : "메뉴없음"})
            </li>)}
            </ul>
            <button onClick={fetchData}>reLoad</button>
            {userId && <StoreDetail id={userId} />}
        </div>
    )
}

export default LoadStore;