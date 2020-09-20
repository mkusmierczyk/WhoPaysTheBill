import React, {useEffect, useState} from 'react';
import AddBill from "./addBill";
import BillsDisplay from "./billsDisplay";
import * as firebase from "firebase";

function Table() {
    const [billsData, setBillsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("mateusz").get();
            const mappedData = data.docs.map(doc => ({...doc.data(), id: doc.id}));
            setBillsData(mappedData);
        };
        fetchData();
    }, [])
    console.log(billsData);

    return (
        <>
            <AddBill/>
            <BillsDisplay billsData={ billsData } />
            </>
    );
}

export default Table;
