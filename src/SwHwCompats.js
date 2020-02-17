

import React from "react"
import {useStateContext, useDispatchContext} from "./useContext";


const SwHwCompats = () => {
    const { swHwCompats } = useStateContext();
    const dispatch = useDispatchContext();

    return (
        <>
            <h4>SwHwCompats</h4>
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
                    {Object.values(swHwCompats).map(swHwCompat => (
                        <tr key={swHwCompat.id}>
                            <td>{swHwCompat.name}</td>
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

export {SwHwCompats};