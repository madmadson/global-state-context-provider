

import React from "react"
import {useStateContext, useDispatchContext} from "./useContext";


const Flashwares = (props) => {
    const { flashwares } = useStateContext();
    const dispatch = useDispatchContext();

    return (
        <>
            <h4>Flashwares</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SomeData</th>
                        <th>MoarData</th>
                        <th>dataaaa</th>
                        <th>dataaaa</th>
                        <th>yeahData</th>
                        <th>cats</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(flashwares).map(flashware => (
                        <tr key={flashware.name}>
                            <td>{flashware.name}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export {Flashwares};