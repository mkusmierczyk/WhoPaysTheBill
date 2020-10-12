import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase';

function AddBill() {
    const [clientID, setClientID] = useState("ID")
    const [amount, setAmount] = useState(0)
    const [month, setMonth] = useState('2020-01-30')
    const [recipient, setRecipient] = useState('Gaz')
    const [record, setRecord] = useState(false)

    const submit = () => {
        setRecord({
            clientId : clientID,
            amountOfBill: +amount,
            monthOfBill: new Date(month.slice(0,4), month.slice(6,7), month.slice(8,10)),
            recipientOfBill: recipient,
            isPaid: false,
        })}

    useEffect(() =>{
        if (record !== false){
            const db = firebase.firestore()
            let updatedList = JSON.stringify(record, function (key, value) {
                return (value === undefined) ? "" : value
            });
            let billData = JSON.parse(updatedList);
            db.collection("bills").add(billData)
        }},[record])

    return (
        <div>
            <input value={amount}
                   onChange={(event) => setAmount(event.target.value)}/>
            <input
                type="date" required
                pattern="\d{4}-\d{2}-\d{2}" value={month} onChange={(event) => setMonth(event.target.value)}>

            </input>
            <select
                value={recipient} onChange={(event) => setRecipient(event.target.value)}>
                <option
                    value="Gaz">Gaz
                </option>
                <option
                    value="Woda">Woda
                </option>
            </select>
            <button onClick={submit} value={"Zapisz"}>Zapisz</button>



        </div>
    );
}

export default AddBill;
