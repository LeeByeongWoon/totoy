import React, { useState } from 'react';
import { useStoresState, useStoresDispatch, Stores } from 'lib/useAsync';
import StoreDetail from './StoreDetail';


function LoadStore() {
    const [userId, setUserId] = useState<null | number>(null);
    const state = useStoresState();
    const dispatch = useStoresDispatch();

    const { loading, data, error } = state.stores;

    const fetchData = () => {
        Stores(dispatch);
        setUserId(null);
    }

    if (loading) return <div>로딩 중</div>;
    if (error) return <div>에러가 발생 했습니다.</div>;
    if (!data) return <button onClick={fetchData}>Load</button>;

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