import React, {useEffect, useState} from "react";
import * as firebase from 'firebase'

    function BillsDisplay({billsData}) {

        console.log(billsData);



        return (
            <>
                <table>
                    <caption>Miesiąc</caption>
                    <thead>
                    <tr>
                        <th>Kwota</th>
                        <th>Miesiąc</th>
                        <th>Odbiorca</th>
                    </tr>
                    </thead>
                    <tbody>
                    {billsData !== false &&
                        billsData.map((bill) =>
                    <tr key={bill.id}>
                        <td> {bill.billData.amountOfBill} zł</td>
                        <td> {bill.billData.monthOfBill} </td>
                        <td> {bill.billData.recipientOfBill}</td>
                    </tr>)}
                    </tbody>
                </table>
            </>

        )

    }
    export default BillsDisplay;