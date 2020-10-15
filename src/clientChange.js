import React, { useEffect, useState } from 'react';


function ClientChange({ filterData }) {
    const [client, setClient] = useState('Wszyscy')
    const [clientsData, setClientsData] = useState(false)
  

    
    useEffect( () =>{
    setClientsData(filterData.filter((value, index) => filterData.indexOf(value.clientId) === index))

    },[]);

    return (
        <>
            <select
                value={client} onChange={(event) => setClient(event.target.value)}>  
                <option value = {"Wszyscy"}>Wszyscy</option>
                {filterData !== false && filterData.map((bill) => 
                <option
                    value= {bill.clientId}> {bill.clientId}
                </option> )}
            </select>
        </>
    );
}

export default ClientChange;
