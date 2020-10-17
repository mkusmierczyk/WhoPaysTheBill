import React, { useEffect, useState } from 'react';

function PropertyChange({ billsData, propertyDisplay, setPropertyDisplay }) {
  
    const [clientsData, setClientsData] = useState(billsData)

    
    function removeDuplicates(array, key) {
        let lookup = {};
        let result = [];
        for(let i=0; i<array.length; i++) {
            if(!lookup[array[i][key]]){
                lookup[array[i][key]] = true;
                result.push(array[i]);
            }
        }
        return setClientsData(result);
    }
    
    useEffect( () =>{
        removeDuplicates(billsData,"property")
    },[billsData]);

    return (
        <>
            <select
                value={propertyDisplay} onChange={(event) => setPropertyDisplay(event.target.value)}>  
                <option value = {"Wszyscy"}>Wszyscy</option>
                {billsData !== false && clientsData.map((bill) => 
                <option key = {bill.property}
                    value= {bill.property} > {bill.property}
                </option> )}
            </select>
        </>
    );
}

export default PropertyChange;
