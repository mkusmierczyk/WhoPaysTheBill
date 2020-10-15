import React, {  useState } from "react";


function TableHead({filterData, setFilterData}) {
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
   
            <thead>
                <tr>
                    <th>Miesiąc<button onClick={sortByDate} > filtr   </button> </th>
                    <th>Kwota <button onClick={sortByAmount}> filtr   </button></th>
                    <th>Odbiorca <button onClick={sortByRecipient}> filtr   </button></th>
                    <th>Zapłacono <button onClick={sortByChecked}> filtr   </button> </th>
                </tr>
            </thead>

        </>
    );
}

export default TableHead;
