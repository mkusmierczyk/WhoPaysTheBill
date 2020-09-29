import React, {useEffect, useState} from "react";
import * as firebase from "firebase";


function IsPaid({bill}) {
const [isPaid, setChangeIsPaid] = useState(null)
        const db = firebase.firestore()
    // const updateIsPaid = () => {
    //     onChange = {e => {setChangeIsPaid(e.target.value)}}
    //     const db = firebase.firestore()
    //     db.collection('bills').doc('0'). set({...bill, isPaid})
    // }

    useEffect(() => {
        setChangeIsPaid(!bill.isPaid)
    },[isPaid])
    return (
        <>
            <input type={'checkbox'}  checked={bill.isPaid}  onClick={() => (db.collection("bills").doc(bill.id).set({...bill, isPaid})) } />

        </>
    )

}
export default IsPaid