import React, { useEffect, useState } from "react";
import IsPaid from './isPaid';
import SearchBill from "./searchBill";
import TableFoot from "./tableFoot";
import ClientChange from "./clientChange";

function BillsDisplay({ billsData }) {
    const [filterStart, setFilterStart] = useState("2020-01-20");
    const [filterEnd, setFilterEnd] = useState((new Date().toISOString().slice(0, 10)));
    const [filterData, setFilterData] = useState(billsData)

   

    useEffect(() => {
        setFilterData(billsData.filter(bill => {
            return ((Date.parse(bill.monthOfBill)) > (Date.parse(new Date([(filterStart.slice(0, 4)), (filterStart.slice(5, 7)), (filterStart.slice(8, 10))])))
                && ((Date.parse(bill.monthOfBill)) < (Date.parse(new Date([(filterEnd.slice(0, 4)), (filterEnd.slice(5, 7)), (filterEnd.slice(8, 10))])))))
        }))

    }, [filterStart, filterEnd, billsData])

    const [ascDesc, setAscDsc] = useState("asc")

    const sortByDate = () => {
        setFilterData(filterData.sort((a, b) =>
            ascDesc === "asc"
                ? a.monthOfBill.localeCompare(b.monthOfBill)
                : b.monthOfBill.localeCompare(a.monthOfBill)
        ))
        ascDesc === "asc"
            ? setAscDsc("desc")
            : setAscDsc("asc")
    }

    const sortByChecked = () => {
        setFilterData(filterData.sort((a, b) =>
            ascDesc === "asc"
                ? a.isPaid - b.isPaid
                : b.isPaid - a.isPaid
        ))
        ascDesc === "asc"
            ? setAscDsc("desc")
            : setAscDsc("asc")
    }

    const sortByAmount = () => {
        setFilterData(filterData.sort((a, b) =>
            ascDesc === "asc"

                ? a.amountOfBill - b.amountOfBill
                : b.amountOfBill - a.amountOfBill
        ))
        ascDesc === "asc"
            ? setAscDsc("desc")
            : setAscDsc("asc")
    }

    const sortByRecipient = () => {
        setFilterData(filterData.sort((a, b) =>
            ascDesc === "asc"
                ? a.recipientOfBill.localeCompare(b.recipientOfBill)
                : b.recipientOfBill.localeCompare(a.recipientOfBill)
        ))
        ascDesc === "asc"
            ? setAscDsc("desc")
            : setAscDsc("asc")
    }

    return (
        <>
            <div>
                <ClientChange filterData = {filterData} />
                <SearchBill filterStart={filterStart} setFilterStart={setFilterStart} filterEnd={filterEnd} setFilterEnd={setFilterEnd} />
                <table>
                    <caption>Zestawienie rachunków</caption>
                    <thead>
                        <tr>
                            <th>Miesiąc<button onClick={sortByDate} > filtr   </button> </th>
                            <th>Kwota <button onClick={sortByAmount}> filtr   </button></th>
                            <th>Odbiorca <button onClick={sortByRecipient}> filtr   </button></th>
                            <th>Zapłacono <button onClick={sortByChecked}> filtr   </button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData !== false && filterData.map((bill) =>
                            <tr key={bill.id}>
                                <td> {bill.monthOfBill.slice(0, 10)} </td>
                                <td> {bill.amountOfBill} zł</td>
                                <td> {bill.recipientOfBill}</td>
                                <IsPaid bill={bill} />
                            </tr>)}
                    </tbody>
         
                            <TableFoot filterData = {filterData} />
                </table>
            </div>
        </>
    )
}
export default BillsDisplay;