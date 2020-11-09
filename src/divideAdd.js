import React, { useEffect, useState } from "react";
import * as firebase from "firebase";


function DivideAdd() {

    const [property, setProperty] = useState("")
    const [currState, setCurrState] = useState("")
    const [row, setRow] = useState(false)

// 

    const submit = () => {
        setRow({
            clientId: "",
            property: property,
            currState: +currState,
            monthOfBill: new Date(),
            recipientOfBill: "",
     
        })
        setProperty(0)
        setCurrState("")
    }


useEffect(() => {
    if (row !== false) {
        const db = firebase.firestore()
        let updatedList = JSON.stringify(row, function (key, value) {
            return (value === undefined) ? "" : value
        });
        let divideBill = JSON.parse(updatedList);
        db.collection("billDivide").add(divideBill)
    }

}, [row])


    return (
        <>

            <label><input
            value={property}
            onChange={(event) => setProperty(event.target.value)}/></label>
            
            <label><input
            value={currState}
            onChange={(event) => setCurrState(event.target.value)}/></label>
            
           
            <button onClick= {submit}/>
        </>
    )
}
export default DivideAdd