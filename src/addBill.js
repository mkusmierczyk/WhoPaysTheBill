import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

function AddBill({ billsData }) {
    const [clientID, setClientID] = useState("ID")
    const [property, setProperty] = useState("")
    const [display, setDisplay] = useState(false)

    const [amount, setAmount] = useState(0)
    const [month, setMonth] = useState('2020-01-30')
    const [recipient, setRecipient] = useState('Gaz')
    const [record, setRecord] = useState(false)

    const submit = () => {
        setRecord({
            clientId: clientID,
            property: property,
            amountOfBill: +amount,
            monthOfBill: new Date(month.slice(0, 4), month.slice(6, 7), month.slice(8, 10)),
            recipientOfBill: recipient,
            isPaid: false,
        })
    }

    useEffect(() => {
        if (record !== false) {
            const db = firebase.firestore()
            let updatedList = JSON.stringify(record, function (key, value) {
                return (value === undefined) ? "" : value
            });
            let billData = JSON.parse(updatedList);
            db.collection("bills").add(billData)
        }



        property === "dodaj" ? setDisplay(true) : setDisplay(false)

    }, [record, property])

    return (
        <div>
            <input value={amount}
                onChange={(event) => setAmount(event.target.value)} />
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
            <select
                value={property} onChange={(event) => setProperty(event.target.value)}>
         
                {billsData !== false && billsData.map((bill) =>
                    <option key={bill.property}
                        value={bill.property} > {bill.property}
                    </option>)}
                    <option value={"dodaj"}> Dodaj</option>
            </select>
            <div style={{ display: display === true ? "block" : "none" }}>
                <input value={property} onChange={(event) => setProperty(event.target.value)} />
            </div>

            <button onClick={submit} value={"Zapisz"}>Zapisz</button>

        </div>
    );
}

export default AddBill;
