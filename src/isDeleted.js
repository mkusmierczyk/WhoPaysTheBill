import React from "react";
import * as firebase from "firebase";

function IsDeleted({filterData, setFilterData, bill}) {
    const db = firebase.firestore()

    const deleteRecord = (e, billsId) => {
        e.preventDefault();
        const db = firebase.firestore()
        db.collection("bills").doc(billsId).delete()
        const data = filterData.filter(movie => movie.id !== billsId);
        setFilterData(data)
    }

    return (
        <>
            <span onClick = {e=> deleteRecord(e, bill.id)}>x</span>
      
        </> 
    )
}
export default IsDeleted