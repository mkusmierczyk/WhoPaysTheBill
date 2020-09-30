import React, {useEffect, useState} from "react";
import IsPaid from './isPaid';
import SearchBill from "./searchBill";

function BillsDisplay({billsData}) {

    let amountSum = 0;
    billsData.forEach(x => amountSum += x.amountOfBill);

function billFilter(props, filterStart,filterEnd) {props.filter(bill=>{
    return(Date.parse(bill.monthOfBill) > (Date.parse(filterStart + "T00:00:00"))
                && Date.parse(bill.monthOfBill) < (Date.parse(filterEnd + "T23:59:59")))
})
}

    // const onlyMoviesNonWS = props.filter(movie => {
    //     return
    //         movie.dataBase.type === type &&
    //         movie.dataBase.wishlist === wishesList &&
    //         (Date.parse(movie.dataBase.date) > (Date.parse(filterStart + "T00:00:00"))
    //             && Date.parse(movie.dataBase.date) < (Date.parse(filterEnd + "T23:59:59")))
    // });

    return (
        <>
                <div>
                    <SearchBill billsData={billsData} billFilter={billFilter}/>
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
                        {billsData !== false && billsData.map((bill) =>
                        <tr key={bill.id}>
                            <td> {bill.monthOfBill.seconds} </td>
                            <td> {bill.amountOfBill} zł</td>
                            <td> {bill.recipientOfBill}</td>
                            <IsPaid bill={bill}/>
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
                </div>
        </>
    )
}

export default BillsDisplay;