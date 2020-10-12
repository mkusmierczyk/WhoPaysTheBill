import React, {useEffect, useState} from "react";
import IsPaid from './isPaid';
import SearchBill from "./searchBill";

function BillsDisplay({billsData}) {
    const [filterStart, setFilterStart] = useState("2020-01-20");
    const [filterEnd, setFilterEnd] = useState((new Date().toISOString().slice(0, 10)));
    const [filterData, setFilterData] = useState(billsData)
    console.log(Date.parse(new Date(filterStart.slice(0,4), filterStart.slice(6,7), filterStart.slice(8,10)) ));
    console.log(Date.parse(new Date(filterEnd.slice(0,4), filterEnd.slice(6,7), filterEnd.slice(8,10))));
    billsData.map(x => console.log(Date.parse(x.monthOfBill)));
    let amountSum = 0;
    filterData.forEach(x => amountSum += x.amountOfBill);


console.log([(filterStart.slice(0,4)), (filterStart.slice(5,7)), (filterStart.slice(8,10))])
    console.log(filterData);
    useEffect(()=>{
  setFilterData( billsData.filter(bill=>{
        return ((Date.parse(bill.monthOfBill)) > (Date.parse(new Date([(filterStart.slice(0,4)), (filterStart.slice(5,7)), (filterStart.slice(8,10))]) ))
            && ((Date.parse(bill.monthOfBill)) < (Date.parse(new Date([(filterEnd.slice(0,4)), (filterEnd.slice(5,7)), (filterEnd.slice(8,10))]) ))))
    }))

},[filterStart,filterEnd,billsData])



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
                    <SearchBill filterStart={filterStart} setFilterStart={setFilterStart} filterEnd={filterEnd} setFilterEnd={setFilterEnd}/>
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
                        {filterData !== false && filterData.map((bill) =>
                        <tr key={bill.id}>
                            <td> {bill.monthOfBill.slice(0,10)} </td>
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