import React, { useEffect, useState } from 'react';

function ClientChange({ billsData, client, setClient }) {
  
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
        removeDuplicates(billsData,"clientId")
    },[billsData]);

    return (
        <>
            <select
                value={client} onChange={(event) => setClient(event.target.value)}>  
                <option value = {"Wszyscy"}>Wszyscy</option>
                {billsData !== false && clientsData.map((bill) => 
                <option key = {bill.clientId}
                    value= {bill.clientId} > {bill.clientId}
                </option> )}
            </select>
        </>
    );
}

export default ClientChange;
