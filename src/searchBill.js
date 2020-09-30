import React, {useEffect, useState} from 'react'

function SearchBill({billsData,billFilter}) {
    const [filterStart, setFilterStart] = useState("2019-03-13");
    const [filterEnd, setFilterEnd] = useState((new Date().toISOString().slice(0, 10)));


    useEffect(()=>{

        billFilter(billsData, setFilterStart, setFilterEnd)

    },[filterStart, filterEnd])

    return (
        <>
            <div>
                <label >
                    <input  type="date" required
                           pattern="\d{4}-\d{2}-\d{2}" value={filterStart}
                            onChange={(event) => setFilterStart(event.target.value)}/>/>
                </label>
                <label > do:
                    <input type="date" value={filterEnd}
                           onChange={(event) => setFilterEnd(event.target.value)}/>/>
                </label>
            </div>
        </>

    )
}

export default SearchBill;