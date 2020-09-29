import React, {useEffect, useState} from "react";
import IsPaid from './isPaid';
import * as firebase from "firebase";

    function BillsDisplay(props) {
        let amountSum = 0;
        // const [isPaidCheckbox, setIsPaidCheckbox] = useState(true )
        props.billsData.forEach(x => amountSum += x.amountOfBill);

        return (
            <>
                {/*<input type={"checkbox"} value={isPaidCheckbox}*/}
                {/*       onClick={() => setIsPaidCheckbox(!isPaidCheckbox) } checked={isPaidCheckbox}/>*/}
                {/*szukajka*/}
                <table>
                    <caption>Zestawienie rachunków</caption>
                    <thead>
                    <tr>
                        <th>Miesiąc</th>
                        <th>Kwota</th>
                        <th>Odbiorca</th>
                        <th>Zapłacono</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props !== false && props.billsData.map((bill) =>
                    <tr key={bill.id}>
                        <td> {bill.monthOfBill} </td>
                        <td> {bill.amountOfBill} zł</td>
                        <td> {bill.recipientOfBill}</td>
                        <IsPaid bill={ bill }/>
                    </tr>)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td/>
                        <td>{amountSum} zł</td>
                        <td/>
                    </tr>
                    </tfoot>
                </table>
            </>
        )
    }
    export default BillsDisplay;