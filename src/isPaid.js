import React, {useEffect, useState} from "react";
import * as firebase from "firebase";

function IsPaid({bill}) {
    const [isPaid, setChangeIsPaid] = useState(bill.isPaid)
    const db = firebase.firestore()
    useEffect(() => {
        setChangeIsPaid(!bill.isPaid)
    }, [bill.isPaid])

    return (
        <>
                <input type={'checkbox'} value={!isPaid}  defaultChecked={!isPaid}
                   onClick={() => (db.collection("bills").doc(bill.id).set({...bill, isPaid})) }/>
        </>
    )
}
export default IsPaid