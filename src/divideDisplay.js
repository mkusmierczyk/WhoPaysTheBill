import React, { useEffect, useState } from "react";
import * as firebase from "firebase";

function DivideDisplay() {

    return (
        <>

            <table>
                <caption>Zestawienie rachunków</caption>
                <thead>
                    <tr>
                        <th>Miesiąc </th>
                        <th>Mieszkanie  </th>
                        <th>Stan zeszły miesiąc</th>
                        <th>Stan teraz </th>
                        <th>Zużycie </th>
                        <th>Do zapłaty </th>
                  
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                
                    </tr>
                </tbody>

                <tfoot></tfoot>

            </table>

        </>
    )
}
export default DivideDisplay