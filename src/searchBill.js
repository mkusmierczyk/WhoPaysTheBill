import React from 'react'

function SearchBill({filterStart, setFilterStart, filterEnd, setFilterEnd}) {

    return (
        <>
            <div>
                <label >
                    <input  type="date" required
                           pattern="\d{4}-\d{2}-\d{2}" value={filterStart}
                            onChange={(event) => setFilterStart(event.target.value)}/>
                </label>
                <label > do:
                    <input type="date" value={filterEnd}
                           onChange={(event) => setFilterEnd( event.target.value)}/>
                </label>
            </div>
        </>

    )
}

export default SearchBill;