import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase';

function AddBill() {
    const [amount, setAmount] = useState(0)
    const [month, setMonth] = useState('Październik')
    const [recipient, setRecipient] = useState('Gaz')
    const [record, setRecord] = useState(false)

    const submit = () => {
        setRecord({
            amountOfBill: +amount,
            monthOfBill: month,
            recipientOfBill: recipient,
        })}

    useEffect(() =>{
        if (record !== false){
            const db = firebase.firestore()
            let updatedList = JSON.stringify(record, function (key, value) {
                return (value === undefined) ? "" : value
            });
            let billData = JSON.parse(updatedList);
            db.collection("mateusz").add({billData})
        }},[record])

    return (
        <div>
            <input value={amount}
                   onChange={(event) => setAmount(event.target.value)}/>
            <select
                value={month} onChange={(event) => setMonth(event.target.value)}>
                <option
                    value="Październik">Październik
                </option>
                <option
                    value="Listopad">Listopad
                </option>
            </select>
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
