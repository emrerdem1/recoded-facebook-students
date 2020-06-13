import React, { useContext, useState, useEffect } from 'react';
import { TheProvider } from './TheProvider'
import {db} from "./firebase";
import UserItem from './UserItem'
const HomePage = () => {
    const [dataHolder, setData] = useState('');

    useEffect(() => {
        db.collection("profiles").onSnapshot(collection => collection.docs.map((doc, index) =>
            setData(prev => [...prev, doc.data()])
        )
        );
    }, []);

    return (
        <div>
            {dataHolder && dataHolder.map((user, idx) => <UserItem key={user + idx} item={user} />)}
            {console.log(dataHolder)}
        </div>
    )
}
export default HomePage