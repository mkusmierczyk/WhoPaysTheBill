import React from "react";


function TableFoot({ filterData }) {

    let amountSum = 0;
    filterData.forEach(x => amountSum += x.amountOfBill);

    return (
        <>
            <tfoot>
                <tr>
                    <td />
                    <td>{amountSum} zł</td>
                    <td />
                </tr>
            </tfoot>

        </>
    );
}

export default TableFoot;
