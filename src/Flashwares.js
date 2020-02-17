
import uuidv4 from "uuid/v4"
import React from "react"
import {useStateContext} from "./useContext";


const Flashwares = () => {
    const { flashwares } = useStateContext();

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
                        <tr key={uuidv4()}>
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