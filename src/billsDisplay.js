import React, {useEffect, useState} from "react";
import * as firebase from 'firebase'

    function BillsDisplay(billsData) {
        const data = billsData.billsData;
        let amountSum = 0;
        data.forEach(x => amountSum += x.billData.amountOfBill);
        return (
            <>
                <table>
                    <caption>Zestawienie rachunków</caption>
                    <thead>
                    <tr>
                        <th>Miesiąc</th>
                        <th>Kwota</th>
                        <th>Odbiorca</th>
                    </tr>
                    </thead>
                    <tbody>
                    {billsData !== false && data.map((bill) =>
                    <tr key={bill.id}>
                        <td> {bill.billData.monthOfBill} </td>
                        <td> {bill.billData.amountOfBill} zł</td>
                        <td> {bill.billData.recipientOfBill}</td>
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