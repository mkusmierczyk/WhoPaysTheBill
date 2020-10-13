import React, { useEffect, useState } from "react";
import IsPaid from './isPaid';
import SearchBill from "./searchBill";

function BillsDisplay({ billsData }) {
    const [filterStart, setFilterStart] = useState("2020-01-20");
    const [filterEnd, setFilterEnd] = useState((new Date().toISOString().slice(0, 10)));
    const [filterData, setFilterData] = useState(billsData)

    let amountSum = 0;
    filterData.forEach(x => amountSum += x.amountOfBill);


    useEffect(() => {
        setFilterData(billsData.filter(bill => {
            return ((Date.parse(bill.monthOfBill)) > (Date.parse(new Date([(filterStart.slice(0, 4)), (filterStart.slice(5, 7)), (filterStart.slice(8, 10))])))
                && ((Date.parse(bill.monthOfBill)) < (Date.parse(new Date([(filterEnd.slice(0, 4)), (filterEnd.slice(5, 7)), (filterEnd.slice(8, 10))])))))
        }))

    }, [filterStart, filterEnd, billsData])


    const [ascDesc, setAscDsc] = useState("asc")
    const [fieldSort, setFieldSort] = useState(false)

    // const [sortedField, setSortedField] = useState(null)
    // const [sortConfig, setSortConfig] = React.useState(null);


    // let sortedProducts = [...filterData];
    // if (sortedField !== null) {
    //     sortedProducts.sort((a, b) => {
    //         if (a[sortedField] < b[sortedField]) {
    //             return -1;
    //         }
    //         if (a[sortedField] > b[sortedField]) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // }

    //     sortedProducts.sort((a, b) => {
    //         if (a[sortConfig.key] < b[sortConfig.key]) {
    //             return sortConfig.direction === 'ascending' ? -1 : 1;
    //         }
    //         if (a[sortConfig.key] > b[sortConfig.key]) {
    //             return sortConfig.direction === 'ascending' ? 1 : -1;
    //         }
    //         return 0;
    //     });

    //     const requestSort = (key) => {
    //         let direction = 'ascending';
    //         if (
    //           sortConfig &&
    //           sortConfig.key === key &&
    //           sortConfig.direction === 'ascending'
    //         ) {
    //           direction = 'descending';
    //         }
    //         setSortConfig({ key, direction });
    //       };

    //       return { items: sortedItems, requestSort, sortConfig };
    //     };


    //       const { items, requestSort, sortConfig } = useSortableData(filterData);
    //       const getClassNamesFor = (name) => {
    //         if (!sortConfig) {
    //           return;
    //         }
    //         return sortConfig.key === name ? sortConfig.direction : undefined;
    //       };


    const sortBy = (key) => {


        setAscDsc(filterData.sort((a, b) => 
            ascDesc === "asc"
                ? a.amountOfBill - b.amountOfBill
                : b.amountOfBill - a.amountOfBill
            )
        )
       
        ascDesc === "asc"
            ? setAscDsc("desc")
            : setAscDsc("asc")
    }






    return (
        <>
            <div>
                <SearchBill filterStart={filterStart} setFilterStart={setFilterStart} filterEnd={filterEnd} setFilterEnd={setFilterEnd} />
                <table>
                    <caption>Zestawienie rachunków</caption>
                    <thead>
                        <tr>
                            <th>Miesiąc<button onClick={sortBy}> filtr   </button> </th>
                            <th>Kwota <button onClick={() => setAscDsc(!ascDesc)}> filtr   </button></th>
                            <th>Odbiorca <button onClick={() => setAscDsc(!ascDesc)}> filtr   </button></th>
                            <th>Zapłacono <button onClick={() => setAscDsc(!ascDesc)}> filtr   </button> </th>
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
                    <tfoot>
                        <tr>
                            <td />
                            <td>{amountSum} zł</td>
                            <td />
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default BillsDisplay;