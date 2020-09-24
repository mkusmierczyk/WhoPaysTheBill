import React, {useEffect, useState} from "react";
import IsPaid from './isPaid';

    function BillsDisplay(props) {
        const data = props.billsData;
        let amountSum = 0;
        data.forEach(x => amountSum += x.billData.amountOfBill);
        return (
            <>
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
                    {props !== false && data.map((bill) =>
                    <tr key={bill.id}>
                        <td> {bill.billData.monthOfBill} </td>
                        <td> {bill.billData.amountOfBill} zł</td>
                        <td> {bill.billData.recipientOfBill}</td>
                        <IsPaid/>
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