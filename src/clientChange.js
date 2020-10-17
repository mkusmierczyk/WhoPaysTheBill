import React, { useEffect, useState } from 'react';


function ClientChange({ filterData }) {
    const [client, setClient] = useState('Wszyscy')
    const [clientsData, setClientsData] = useState(false)
    
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
       
        removeDuplicates(filterData,"clientId")
 

    },[filterData]);


   


    return (
        <>
            <select
                value={client} onChange={(event) => setClient(event.target.value)}>  
                <option value = {"Wszyscy"}>Wszyscy</option>
                {clientsData !== false && clientsData.map((bill) => 
                <option
                    value= {bill.clientId}> {bill.clientId}
                </option> )}
            </select>
        </>
    );
}

export default ClientChange;
